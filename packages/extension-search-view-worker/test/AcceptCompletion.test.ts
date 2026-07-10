import { expect, test } from '@jest/globals'
import { acceptCompletion } from '../src/parts/AcceptCompletion/AcceptCompletion.ts'
import { createDefaultState } from '../src/parts/CreateDefaultState/CreateDefaultState.ts'

test('accepts focused completion', async () => {
  const state = {
    ...createDefaultState(),
    completionItems: [{ highlights: [0, 4], label: '@installed' }],
    cursorOffset: 4,
    searchValue: '@ins',
    suggestOpen: true,
  }
  const result = await acceptCompletion(state)
  expect(result.searchValue).toBe('@installed')
  expect(result.cursorOffset).toBe(10)
  expect(result.suggestOpen).toBe(false)
})

test('accepts explicit completion', async () => {
  const state = { ...createDefaultState(), cursorOffset: 1, searchValue: '@', suggestOpen: true }
  const result = await acceptCompletion(state, '@builtin')
  expect(result.searchValue).toBe('@builtin')
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
