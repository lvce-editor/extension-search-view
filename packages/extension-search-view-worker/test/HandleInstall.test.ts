import { expect, test } from '@jest/globals'
import type { State } from '../src/parts/State/State.ts'
import { createDefaultState } from '../src/parts/CreateDefaultState/CreateDefaultState.ts'
import * as HandleInstall from '../src/parts/HandleInstall/HandleInstall.ts'

test('handleInstall returns state', async () => {
  const state: State = createDefaultState()
  const id = 'test-id'

  const result = await HandleInstall.handleInstall(state, id)
  expect(result).toBe(state)
})
