import { expect, test } from '@jest/globals'
import * as DiffFocus from '../src/parts/DiffFocus/DiffFocus.ts'
import { createDefaultState } from '../src/parts/CreateDefaultState/CreateDefaultState.ts'

test('isEqual returns true for any state comparison', () => {
  const oldState = createDefaultState()
  const newState = createDefaultState()
  expect(DiffFocus.isEqual(oldState, newState)).toBe(true)
})
