import { expect, test } from '@jest/globals'
import { createDefaultState } from '../src/parts/CreateDefaultState/CreateDefaultState.ts'
import { openSuggest } from '../src/parts/OpenSuggest/OpenSuggest.ts'

test('openSuggest', () => {
  const state = createDefaultState()
  const result = openSuggest(state)
  expect(result).toEqual(state)
})
