import { jest, test, expect } from '@jest/globals'
import { handleScrollBarCaptureLost } from '../src/parts/HandleScrollBarCaptureLost/HandleScrollBarCaptureLost.ts'
import { createDefaultState } from '../src/parts/CreateDefaultState/CreateDefaultState.ts'

test('should set scrollBarActive to false', () => {
  const initialState = {
    ...createDefaultState(),
    scrollBarActive: true,
  }

  const newState = handleScrollBarCaptureLost(initialState)

  expect(newState.scrollBarActive).toBe(false)
})
