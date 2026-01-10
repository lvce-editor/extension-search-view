import { expect, test } from '@jest/globals'
import type { State } from '../src/parts/State/State.ts'
import { createDefaultState } from '../src/parts/CreateDefaultState/CreateDefaultState.ts'
import { handleEnableWorkspace } from '../src/parts/HandleEnableWorkspace/HandleEnableWorkspace.ts'

test('handleEnableWorkspace returns state', () => {
  const state: State = createDefaultState()
  const result = handleEnableWorkspace(state, 'test-id')
  expect(result).toBe(state)
})
