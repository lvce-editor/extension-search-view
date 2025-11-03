import { expect, test } from '@jest/globals'
import { RendererWorker } from '@lvce-editor/rpc-registry'
import * as CreateDefaultState from '../src/parts/CreateDefaultState/CreateDefaultState.ts'
import * as HandleContextMenu from '../src/parts/HandleContextMenu/HandleContextMenu.ts'
import * as MenuEntryId from '../src/parts/MenuEntryId/MenuEntryId.ts'

test('handleContextMenu returns state', async () => {
  const mockRpc = RendererWorker.registerMockRpc({
    'ContextMenu.show'() {},
  })
  const state = CreateDefaultState.createDefaultState()
  const result = await HandleContextMenu.handleContextMenu(state, 0, 100, 200)
  expect(result).toBe(state)
  expect(mockRpc.invocations).toEqual([['ContextMenu.show', 100, 200, MenuEntryId.ManageExtension]])
})
