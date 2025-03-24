import { expect, test } from '@jest/globals'
import { createDefaultState } from '../src/parts/CreateDefaultState/CreateDefaultState.ts'
import { toggleSuggest } from '../src/parts/ToggleSuggest/ToggleSuggest.ts'

test('toggleSuggest', () => {
  const state = createDefaultState()
  const result = toggleSuggest(state)
  expect(result).toEqual(state)
})
