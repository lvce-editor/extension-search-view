import { expect, test } from '@jest/globals'
import * as CreateDefaultState from '../src/parts/CreateDefaultState/CreateDefaultState.ts'
import * as HandleFocus from '../src/parts/HandleFocus/HandleFocus.ts'

test('handleFocus returns state', async () => {
  const state = CreateDefaultState.createDefaultState()
  const result = await HandleFocus.handleFocus(state)
  expect(result).toBe(state)
})
