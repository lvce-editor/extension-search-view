import { expect, test } from '@jest/globals'
import { closeSuggest } from '../src/parts/CloseSuggest/CloseSuggest.ts'
import { createDefaultState } from '../src/parts/CreateDefaultState/CreateDefaultState.ts'

test('closeSuggest', () => {
  const state = createDefaultState()
  const result = closeSuggest(state)
  expect(result).toEqual(state)
})
