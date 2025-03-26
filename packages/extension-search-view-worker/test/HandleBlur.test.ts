import { test, expect } from '@jest/globals'
import type { State } from '../src/parts/State/State.ts'
import { createDefaultState } from '../src/parts/CreateDefaultState/CreateDefaultState.ts'
import { handleBlur } from '../src/parts/HandleBlur/HandleBlur.ts'

test('handleBlur returns state with focused set to false', () => {
  const initialState: State = {
    ...createDefaultState(),
    focused: true,
  }

  const result = handleBlur(initialState)
  expect(result.focused).toBe(false)
})
