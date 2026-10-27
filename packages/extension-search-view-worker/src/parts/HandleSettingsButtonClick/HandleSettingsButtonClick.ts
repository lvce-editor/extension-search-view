import { MenuEntryId } from '@lvce-editor/constants'
import type { State } from '../State/State.ts'
import * as ContextMenu from '../ContextMenu/ContextMenu.ts'

export const handleSettingsButtonClick = async (state: State, index: number, eventX: number, eventY: number): Promise<State> => {
  const { deltaY, headerHeight, itemHeight, items, uid, width, x, y } = state
  const actualIndex = index
  if (actualIndex < 0 || actualIndex >= items.length) {
    return state
  }

  const itemY = y + headerHeight + actualIndex * itemHeight - deltaY
  const hasPointerCoordinates = eventX > 0 && eventY > 0
  const menuX = hasPointerCoordinates ? eventX : x + width - 12
  const menuY = hasPointerCoordinates ? eventY : itemY + itemHeight - 10

  await ContextMenu.show2(uid, MenuEntryId.ManageExtension, menuX, menuY, {
    builtin: items[actualIndex].builtin,
    disabled: items[actualIndex].disabled,
    menuId: MenuEntryId.ManageExtension,
    status: items[actualIndex].status,
  })
  return {
    ...state,
    focusedIndex: actualIndex,
  }
}
