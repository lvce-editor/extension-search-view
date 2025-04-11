import { expect, test } from '@jest/globals'
import * as CreateDefaultState from '../src/parts/CreateDefaultState/CreateDefaultState.ts'
import * as HandleContextMenu from '../src/parts/HandleContextMenu/HandleContextMenu.ts'

test.skip('handleContextMenu returns state', async () => {
  const state = CreateDefaultState.createDefaultState()
  const result = await HandleContextMenu.handleContextMenu(state, 0, 100, 200)
  expect(result).toBe(state)
})
