import { expect, test } from '@jest/globals'
import type { State } from '../src/parts/State/State.ts'
import { createDefaultState } from '../src/parts/CreateDefaultState/CreateDefaultState.ts'
import { handleDisableWorkspace } from '../src/parts/HandleDisableWorkspace/HandleDisableWorkspace.ts'

test('handleDisableWorkspace returns state', () => {
  const state: State = createDefaultState()
  const result = handleDisableWorkspace(state, 'test-id')
  expect(result).toBe(state)
})
