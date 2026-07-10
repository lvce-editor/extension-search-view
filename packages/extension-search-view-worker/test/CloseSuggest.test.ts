import { expect, test } from '@jest/globals'
import { closeSuggest } from '../src/parts/CloseSuggest/CloseSuggest.ts'
import { createDefaultState } from '../src/parts/CreateDefaultState/CreateDefaultState.ts'

test('closeSuggest', () => {
  const state = { ...createDefaultState(), suggestOpen: true }
  const result = closeSuggest(state)
  expect(result.suggestOpen).toBe(false)
})

test('closeSuggest returns same state when already closed', () => {
  const state = createDefaultState()
  expect(closeSuggest(state)).toBe(state)
})
