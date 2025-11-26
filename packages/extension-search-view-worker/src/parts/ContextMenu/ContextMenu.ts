import { RendererWorker } from '@lvce-editor/rpc-registry'
import type { ContextMenuProps } from '../ContextMenuProps/ContextMenuProps.ts'
import * as Assert from '../Assert/Assert.ts'

export const show = async (x: number, y: number, id: number): Promise<void> => {
  Assert.number(x)
  Assert.number(y)
  Assert.number(id)
  await RendererWorker.showContextMenu(x, y, id)
}

export const show2 = async <T extends ContextMenuProps>(
  uid: number,
  menuId: ContextMenuProps['menuId'],
  x: number,
  y: number,
  args: ContextMenuProps,
): Promise<void> => {
  await RendererWorker.showContextMenu2(uid, menuId, x, y, args)
}
