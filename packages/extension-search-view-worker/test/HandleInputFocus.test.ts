import { expect, test } from '@jest/globals'
import { createDefaultState } from '../src/parts/CreateDefaultState/CreateDefaultState.ts'
import * as FocusId from '../src/parts/FocusId/FocusId.ts'
import { handleInputFocus } from '../src/parts/HandleInputFocus/HandleInputFocus.ts'

test('focuses extension search input', () => {
  expect(handleInputFocus(createDefaultState()).focus).toBe(FocusId.Input)
})
