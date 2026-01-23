import { MenuEntryId } from '@lvce-editor/constants'
import type { State } from '../State/State.ts'
import * as ContextMenu from '../ContextMenu/ContextMenu.ts'

export const handleSettingsButtonClick = async (state: State, index: number): Promise<State> => {
  const { deltaY, headerHeight, itemHeight, items, uid, x, y } = state
  const actualIndex = index
  if (actualIndex < 0 || actualIndex >= items.length) {
    return state
  }

  // Calculate the position for the context menu
  // The settings button is at the bottom right of the extension list item
  const itemY = y + headerHeight + actualIndex * itemHeight - deltaY
  const menuX = x + 200 // Position near the right side of the extension item
  const menuY = itemY + itemHeight - 10 // Position at the bottom of the extension item

  await ContextMenu.show2(uid, MenuEntryId.ManageExtension, menuX, menuY, {
    menuId: MenuEntryId.ManageExtension,
  })
  return state
}
