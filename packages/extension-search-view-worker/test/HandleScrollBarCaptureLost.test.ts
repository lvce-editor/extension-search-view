import { expect, test } from '@jest/globals'
import { createDefaultState } from '../src/parts/CreateDefaultState/CreateDefaultState.ts'
import { handleScrollBarCaptureLost } from '../src/parts/HandleScrollBarCaptureLost/HandleScrollBarCaptureLost.ts'

test('should set scrollBarActive to false', () => {
  const initialState = {
    ...createDefaultState(),
    scrollBarActive: true,
  }

  const newState = handleScrollBarCaptureLost(initialState)

  expect(newState.scrollBarActive).toBe(false)
})
