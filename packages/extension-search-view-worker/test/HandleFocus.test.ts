import { expect, test } from '@jest/globals'
import type { State } from '../src/parts/State/State.ts'
import { createDefaultState } from '../src/parts/CreateDefaultState/CreateDefaultState.ts'
import * as FocusId from '../src/parts/FocusId/FocusId.ts'
import { handleFocus } from '../src/parts/HandleFocus/HandleFocus.ts'

test('handleFocus returns state with focus set to List', async () => {
  const initialState: State = {
    ...createDefaultState(),
    focus: FocusId.Input,
  }

  const result = await handleFocus(initialState)
  expect(result.focus).toBe(FocusId.List)
  expect(result).not.toBe(initialState)
})
