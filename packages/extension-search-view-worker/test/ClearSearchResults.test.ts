import { expect, test } from '@jest/globals'
import * as ClearSearchResults from '../src/parts/ClearSearchResults/ClearSearchResults.ts'
import * as CreateDefaultState from '../src/parts/CreateDefaultState/CreateDefaultState.ts'

test('clearSearchResults clears the search input', () => {
  const state = {
    ...CreateDefaultState.createDefaultState(),
    searchValue: 'test search',
  }
  const result = ClearSearchResults.clearSearchResults(state)
  expect(result.searchValue).toBe('')
})
