import type { State } from '../State/State.ts'
import * as Assert from '../Assert/Assert.ts'
import { focusIndexScrollDown } from '../FocusIndexScrollDown/FocusIndexScrollDown.ts'
import { focusIndexScrollUp } from '../FocusIndexScrollUp/FocusIndexScrollUp.ts'

export const focusIndex = (state: State, index: number): State => {
  const { itemHeight, minLineY, maxLineY, headerHeight, height, items } = state
  const itemsLength = items.length
  if (itemsLength === 0) {
    return state
  }
  Assert.number(itemHeight)
  if (index === -1) {
    return {
      ...state,
      focusedIndex: -1,
      focused: true,
    }
  }
  const listHeight = height - headerHeight
  if (index < minLineY + 1) {
    return focusIndexScrollUp(state, index, listHeight, itemHeight, itemsLength)
  }
  if (index >= maxLineY - 1) {
    return focusIndexScrollDown(state, index, listHeight, itemHeight, itemsLength)
  }
  return {
    ...state,
    focusedIndex: index,
    focused: true,
  }
}
