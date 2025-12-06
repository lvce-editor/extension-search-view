import { test, expect } from '@jest/globals'
import { createDefaultState } from '../src/parts/CreateDefaultState/CreateDefaultState.ts'
import * as ExtensionSearchViewStates from '../src/parts/ExtensionSearchViewStates/ExtensionSearchViewStates.ts'
import { saveState } from '../src/parts/SaveState/SaveState.ts'

test('saveState should return search value from extension search view states', () => {
  const mockUid = 123
  const mockSearchValue = 'test search'
  const mockState = {
    ...createDefaultState(),
    searchValue: mockSearchValue,
  }

  ExtensionSearchViewStates.set(mockUid, mockState, mockState)

  const result = saveState(mockState)

  expect(result).toEqual({
    deltaY: 0,
    searchValue: mockSearchValue,
  })
})
