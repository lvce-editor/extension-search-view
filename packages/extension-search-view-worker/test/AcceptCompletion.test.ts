import { expect, test } from '@jest/globals'
import { acceptCompletion, acceptCompletionWithContext } from '../src/parts/AcceptCompletion/AcceptCompletion.ts'
import { createDefaultState } from '../src/parts/CreateDefaultState/CreateDefaultState.ts'
import * as ExtensionSearchViewStates from '../src/parts/ExtensionSearchViewStates/ExtensionSearchViewStates.ts'

test('accepts focused completion', async () => {
  const state = {
    ...createDefaultState(),
    completionItems: [{ highlights: [0, 4], label: '@installed' }],
    cursorOffset: 4,
    searchValue: '@ins',
    suggestOpen: true,
  }
  const result = await acceptCompletion(state)
  expect(result.searchValue).toBe('@installed ')
  expect(result.cursorOffset).toBe(11)
  expect(result.suggestOpen).toBe(false)
})

test('accepts explicit completion', async () => {
  const state = { ...createDefaultState(), cursorOffset: 1, searchValue: '@', suggestOpen: true }
  const result = await acceptCompletion(state, '@builtin')
  expect(result.searchValue).toBe('@builtin ')
})

test('does not add duplicate whitespace', async () => {
  const state = { ...createDefaultState(), cursorOffset: 5, searchValue: '@buil other', suggestOpen: true }
  const result = await acceptCompletion(state, '@builtin')
  expect(result.searchValue).toBe('@builtin other')
})

test('does not add whitespace after a parameter prefix', async () => {
  const state = { ...createDefaultState(), cursorOffset: 4, searchValue: '@cat', suggestOpen: true }
  const result = await acceptCompletion(state, '@category:')
  expect(result.searchValue).toBe('@category:')
})

test('replaces active token and preserves surrounding text', async () => {
  const state = { ...createDefaultState(), cursorOffset: 9, searchValue: 'theme @in other', suggestOpen: true }
  const result = await acceptCompletion(state, '@installed')
  expect(result.searchValue).toBe('theme @installed other')
  expect(result.cursorOffset).toBe(16)
})

test('returns same state without a completion', async () => {
  const state = createDefaultState()
  await expect(acceptCompletion(state)).resolves.toBe(state)
})

test('returns same state without an active completion range', async () => {
  const state = { ...createDefaultState(), completionItems: [{ highlights: [], label: '@builtin' }], searchValue: 'theme' }
  await expect(acceptCompletion(state)).resolves.toBe(state)
})

test('accepts focused completion with context', async () => {
  const state = {
    ...createDefaultState(),
    completionItems: [{ highlights: [0, 4], label: '@installed' }],
    cursorOffset: 4,
    searchValue: '@ins',
    suggestOpen: true,
    uid: 1,
  }
  ExtensionSearchViewStates.set(state.uid, state, state)
  const command = ExtensionSearchViewStates.wrapAsyncCommand(acceptCompletionWithContext)

  await command(state.uid)

  const { newState } = ExtensionSearchViewStates.get(state.uid)
  expect(newState.searchValue).toBe('@installed ')
  expect(newState.cursorOffset).toBe(11)
  expect(newState.suggestOpen).toBe(false)
})

test('does nothing with context without a completion', async () => {
  const state = { ...createDefaultState(), uid: 2 }
  ExtensionSearchViewStates.set(state.uid, state, state)
  const command = ExtensionSearchViewStates.wrapAsyncCommand(acceptCompletionWithContext)

  await command(state.uid)

  const { newState } = ExtensionSearchViewStates.get(state.uid)
  expect(newState).toBe(state)
})

test('does nothing with context without an active completion range', async () => {
  const state = {
    ...createDefaultState(),
    completionItems: [{ highlights: [], label: '@builtin' }],
    searchValue: 'theme',
    uid: 3,
  }
  ExtensionSearchViewStates.set(state.uid, state, state)
  const command = ExtensionSearchViewStates.wrapAsyncCommand(acceptCompletionWithContext)

  await command(state.uid)

  const { newState } = ExtensionSearchViewStates.get(state.uid)
  expect(newState).toBe(state)
})
