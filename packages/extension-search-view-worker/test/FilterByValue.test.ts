import { expect, test } from '@jest/globals'
import { createDefaultState } from '../src/parts/CreateDefaultState/CreateDefaultState.ts'
import * as ExtensionSearchViewStates from '../src/parts/ExtensionSearchViewStates/ExtensionSearchViewStates.ts'
import { createFilterCommand, filterByValue } from '../src/parts/FilterByValue/FilterByValue.ts'
import * as InputSource from '../src/parts/InputSource/InputSource.ts'

test('adds a filter to an empty search value', async () => {
  const state = createDefaultState()

  const result = await filterByValue(state, '@featured')

  expect(result.searchValue).toBe('@featured')
  expect(result.inputSource).toBe(InputSource.Script)
})

test('adds a filter to the existing search value', async () => {
  const state = { ...createDefaultState(), searchValue: 'theme' }

  const result = await filterByValue(state, '@installed')

  expect(result.searchValue).toBe('theme @installed')
})

test('does not add a filter more than once', async () => {
  const state = { ...createDefaultState(), searchValue: 'theme @disabled' }

  const result = await filterByValue(state, '@disabled')

  expect(result.searchValue).toBe('theme @disabled')
})

test('creates a command that updates the registered state', async () => {
  const state = { ...createDefaultState(), searchValue: 'theme', uid: 123 }
  const { uid } = state
  ExtensionSearchViewStates.set(uid, state, state)
  const command = ExtensionSearchViewStates.wrapAsyncCommand(createFilterCommand('@enabled'))

  await command(uid)

  const { newState } = ExtensionSearchViewStates.get(uid)
  expect(newState.searchValue).toBe('theme @enabled')
})
