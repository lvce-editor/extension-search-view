import { MenuEntryId } from '@lvce-editor/constants'
import type { State } from '../State/State.ts'
import * as ContextMenu from '../ContextMenu/ContextMenu.ts'

export const handleMoreActions = async (state: State): Promise<State> => {
  const { uid, x, y, width } = state
  await ContextMenu.show2(uid, MenuEntryId.ExtensionSearchFilter, x + width - 28, y, {
    menuId: MenuEntryId.ExtensionSearchFilter,
    subMenu: 'moreActions',
  })
  return state
}
