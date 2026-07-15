import { expect, test } from '@jest/globals'
import { createDefaultState } from '../src/parts/CreateDefaultState/CreateDefaultState.ts'
import * as ExtensionSearchViewStates from '../src/parts/ExtensionSearchViewStates/ExtensionSearchViewStates.ts'
import { filterByMostPopular, filterByMostPopularWithContext } from '../src/parts/FilterByMostPopular/FilterByMostPopular.ts'
import * as InputSource from '../src/parts/InputSource/InputSource.ts'

test('adds the most popular filter to an empty search value', async () => {
  const state = createDefaultState()

  const result = await filterByMostPopular(state)

  expect(result.searchValue).toBe('@most-popular')
  expect(result.inputSource).toBe(InputSource.Script)
})

test('adds the most popular filter to the existing search value', async () => {
  const state = { ...createDefaultState(), searchValue: 'theme' }

  const result = await filterByMostPopular(state)

  expect(result.searchValue).toBe('theme @most-popular')
})

test('does not add the most popular filter more than once', async () => {
  const state = { ...createDefaultState(), searchValue: 'theme @most-popular' }

  const result = await filterByMostPopular(state)

  expect(result.searchValue).toBe('theme @most-popular')
})

test('updates the registered extension search state', async () => {
  const state = { ...createDefaultState(), searchValue: 'theme', uid: 123 }
  ExtensionSearchViewStates.set(state.uid, state, state)
  const command = ExtensionSearchViewStates.wrapAsyncCommand(filterByMostPopularWithContext)

  await command(state.uid)

  const { newState } = ExtensionSearchViewStates.get(state.uid)
  expect(newState.searchValue).toBe('theme @most-popular')
})
