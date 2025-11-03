import { test, expect } from '@jest/globals'
import type { State } from '../src/parts/State/State.ts'
import { createDefaultState } from '../src/parts/CreateDefaultState/CreateDefaultState.ts'
import * as FocusId from '../src/parts/FocusId/FocusId.ts'
import { handleBlur } from '../src/parts/HandleBlur/HandleBlur.ts'

test('handleBlur returns state with focus set to None', () => {
  const initialState: State = {
    ...createDefaultState(),
    focus: FocusId.Input,
  }

  const result = handleBlur(initialState)
  expect(result.focus).toBe(FocusId.None)
})
