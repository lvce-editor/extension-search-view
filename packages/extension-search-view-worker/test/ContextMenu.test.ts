import { expect, test } from '@jest/globals'
import { MenuEntryId } from '@lvce-editor/constants'
import { RendererWorker } from '@lvce-editor/rpc-registry'
import * as ContextMenu from '../src/parts/ContextMenu/ContextMenu.ts'

test('show2 function calls RendererWorker.showContextMenu2 with correct parameters', async () => {
  using mockRpc = RendererWorker.registerMockRpc({
    'ContextMenu.show2'() {},
  })
  await ContextMenu.show2(123, MenuEntryId.ManageExtension, 100, 200, {
    builtin: false,
    disabled: false,
    menuId: MenuEntryId.ManageExtension,
    status: 'enabled',
  })
  expect(mockRpc.invocations).toEqual([
    [
      'ContextMenu.show2',
      123,
      MenuEntryId.ManageExtension,
      100,
      200,
      { builtin: false, disabled: false, menuId: MenuEntryId.ManageExtension, status: 'enabled' },
    ],
  ])
})
