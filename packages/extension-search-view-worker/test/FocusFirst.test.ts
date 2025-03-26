import { test, expect } from '@jest/globals'
import * as CreateDefaultState from '../src/parts/CreateDefaultState/CreateDefaultState.ts'
import * as FocusFirst from '../src/parts/FocusFirst/FocusFirst.ts'

test('focuses first index', () => {
  const state = {
    ...CreateDefaultState.createDefaultState(),
    focusedIndex: 5,
  }

  const result = FocusFirst.focusFirst(state)
  expect(result.focusedIndex).toBe(0)
})
