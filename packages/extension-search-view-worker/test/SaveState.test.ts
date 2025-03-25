import { expect, test } from '@jest/globals'
import { saveState } from '../src/parts/SaveState/SaveState.ts'

test.skip('saveState returns SavedState with searchValue', () => {
  const result = saveState(0)
  expect(result).toEqual({
    searchValue: 'test search',
  })
})
