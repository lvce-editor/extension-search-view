import { expect, test } from '@jest/globals'
import { createDefaultState } from '../src/parts/CreateDefaultState/CreateDefaultState.ts'
import { handleEnable } from '../src/parts/HandleEnable/HandleEnable.ts'

test('handleEnable returns the same state', () => {
  const state = createDefaultState()
  const result = handleEnable(state, 'test-id')
  expect(result).toBe(state)
})
