import * as ContextMenu from '../ContextMenu/ContextMenu.ts'
import * as MenuEntryId from '../MenuEntryId/MenuEntryId.ts'

export const handleContextMenu = async (state: any, button: number, x: number, y: number): Promise<any> => {
  // TODO use focused index when when context menu button is -1 (keyboard)
  await ContextMenu.show(x, y, MenuEntryId.ManageExtension)
  return state
}
