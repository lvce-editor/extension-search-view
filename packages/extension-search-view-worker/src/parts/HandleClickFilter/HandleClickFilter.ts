import { MenuEntryId } from '@lvce-editor/constants'
import type { State } from '../State/State.ts'
import * as ContextMenu from '../ContextMenu/ContextMenu.ts'

export const handleClickFilter = async (state: State): Promise<State> => {
  const { headerHeight, uid, width, x, y } = state
  const menuX = x + width + 80
  const menuY = y + headerHeight + 100
  await ContextMenu.show2(uid, MenuEntryId.ExtensionSearchFilter, menuX, menuY, {
    menuId: MenuEntryId.ExtensionSearchFilter,
  })
  return state
}
