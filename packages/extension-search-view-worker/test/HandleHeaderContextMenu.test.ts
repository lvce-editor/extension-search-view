import { expect, test } from '@jest/globals'
import type { State } from '../src/parts/State/State.ts'
import { createDefaultState } from '../src/parts/CreateDefaultState/CreateDefaultState.ts'
import { handleHeaderContextMenu } from '../src/parts/HandleHeaderContextMenu/HandleHeaderContextMenu.ts'

test('handleHeaderContextMenu returns the same state', async () => {
  const state: State = {
    ...createDefaultState(),
  }
  const result = await handleHeaderContextMenu(state)
  expect(result).toBe(state)
})
