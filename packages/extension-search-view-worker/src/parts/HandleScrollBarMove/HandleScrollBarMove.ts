import type { State } from '../State/State.ts'
import { setDeltaY } from '../SetDeltaY/SetDeltaY.ts'

const getNewPercent = (contentHeight: number, scrollBarHeight: number, relativeY: number): number => {
  if (relativeY <= contentHeight - scrollBarHeight / 2) {
    // clicked in middle
    return relativeY / (contentHeight - scrollBarHeight)
  }
  // clicked at bottom
  return 1
}

export const handleScrollBarMove = (state: State, eventY: number): State => {
  const { finalDeltaY, handleOffset, headerHeight, height, scrollBarActive, scrollBarHeight, y } = state
  if (!scrollBarActive) {
    return state
  }
  const relativeY = eventY - y - headerHeight - handleOffset
  const contentHeight = height - headerHeight
  const newPercent = getNewPercent(contentHeight, scrollBarHeight, relativeY)
  const newDeltaY = newPercent * finalDeltaY
  return setDeltaY(state, newDeltaY)
}
