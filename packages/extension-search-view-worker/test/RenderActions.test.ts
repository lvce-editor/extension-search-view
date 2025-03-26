import { expect, test } from '@jest/globals'
import { createDefaultState } from '../src/parts/CreateDefaultState/CreateDefaultState.js'
import * as ExtensionSearchViewStates from '../src/parts/ExtensionSearchViewStates/ExtensionSearchViewStates.js'
import { renderActions } from '../src/parts/RenderActions/RenderActions.js'

test('returns empty array when oldState equals newState', () => {
  const state = createDefaultState()
  ExtensionSearchViewStates.set(1, state, state)
  const result = renderActions(1)
  expect(result).toEqual([])
})

test('returns actions virtual dom when states are different', () => {
  const oldState = createDefaultState()
  const newState = { ...createDefaultState(), searchValue: 'test' }
  ExtensionSearchViewStates.set(1, oldState, newState)
  const result = renderActions(1)
  expect(Array.isArray(result)).toBe(true)
})
