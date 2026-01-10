import { MenuEntryId } from '@lvce-editor/constants'
import type { State } from '../State/State.ts'
import * as ContextMenu from '../ContextMenu/ContextMenu.ts'
import * as GetListIndex from '../GetListIndex/GetListIndex.ts'

export const handleContextMenu = async (state: State, button: number, eventX: number, eventY: number): Promise<State> => {
  // TODO use focused index when when context menu button is -1 (keyboard)
  const { deltaY, headerHeight, itemHeight, items, uid, x, y } = state
  const index = GetListIndex.getListIndex(eventX, eventY, x, y, deltaY, itemHeight, headerHeight)
  if (index < 0 || index > items.length) {
    return state
  }

  await ContextMenu.show2(uid, MenuEntryId.ManageExtension, eventX, eventY, {
    menuId: MenuEntryId.ManageExtension,
  })
  return state
}
