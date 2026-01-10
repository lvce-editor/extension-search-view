import { expect, test } from '@jest/globals'
import { RendererWorker } from '@lvce-editor/rpc-registry'
import * as ContextMenu from '../src/parts/ContextMenu/ContextMenu.ts'
import * as MenuEntryId from '../src/parts/MenuEntryId/MenuEntryId.ts'

test('show function validates input parameters', async () => {
  const mockRpc = RendererWorker.registerMockRpc({
    'ContextMenu.show'() {},
  })
  await expect(ContextMenu.show(100, 200, 1)).resolves.not.toThrow()
  await expect(ContextMenu.show(0, 0, 0)).resolves.not.toThrow()
  expect(mockRpc.invocations).toEqual([
    ['ContextMenu.show', 100, 200, 1],
    ['ContextMenu.show', 0, 0, 0],
  ])
})

test('show2 function calls RendererWorker.showContextMenu2 with correct parameters', async () => {
  const mockRpc = RendererWorker.registerMockRpc({
    'ContextMenu.show2'() {},
  })
  await ContextMenu.show2(123, MenuEntryId.ManageExtension, 100, 200, {
    menuId: MenuEntryId.ManageExtension,
  })
  expect(mockRpc.invocations).toEqual([['ContextMenu.show2', 123, MenuEntryId.ManageExtension, 100, 200, { menuId: MenuEntryId.ManageExtension }]])
})
