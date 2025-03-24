import { expect, test } from '@jest/globals'
import * as CreateDefaultState from '../src/parts/CreateDefaultState/CreateDefaultState.ts'
import * as HandleDisable from '../src/parts/HandleDisable/HandleDisable.ts'

test('handleDisable returns state', () => {
  const state = CreateDefaultState.createDefaultState()
  const result = HandleDisable.handleDisable(state, 'test-id')
  expect(result).toBe(state)
})
