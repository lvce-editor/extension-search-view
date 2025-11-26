import type { State } from '../State/State.ts'
import * as ContextMenu from '../ContextMenu/ContextMenu.ts'
import * as MenuEntryId from '../MenuEntryId/MenuEntryId.ts'

export const handleContextMenu = async (state: State, button: number, x: number, y: number): Promise<State> => {
  // TODO use focused index when when context menu button is -1 (keyboard)
  const { uid } = state
  await ContextMenu.show2(uid, MenuEntryId.ManageExtension, x, y, {
    menuId: MenuEntryId.ManageExtension,
  })
  return state
}
