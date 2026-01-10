import type { State } from '../State/State.ts'
import * as ContextMenu from '../ContextMenu/ContextMenu.ts'
import * as MenuEntryId from '../MenuEntryId/MenuEntryId.ts'

export const handleClickFilter = async (state: State): Promise<State> => {
  const { uid, x, y } = state
  await ContextMenu.show2(uid, MenuEntryId.ExtensionSearchFilter, x, y, {
    menuId: MenuEntryId.ExtensionSearchFilter,
  })
  return state
}
