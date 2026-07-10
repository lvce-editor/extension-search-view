import { expect, test } from '@jest/globals'
import { createDefaultState } from '../src/parts/CreateDefaultState/CreateDefaultState.ts'
import { openSuggest } from '../src/parts/OpenSuggest/OpenSuggest.ts'

test('openSuggest', () => {
  const state = { ...createDefaultState(), cursorOffset: 1, searchValue: '@' }
  const result = openSuggest(state)
  expect(result.suggestOpen).toBe(true)
  expect(result.completionItems).toHaveLength(14)
})

test('openSuggest returns same state without an active completion', () => {
  const state = createDefaultState()
  expect(openSuggest(state)).toBe(state)
})
