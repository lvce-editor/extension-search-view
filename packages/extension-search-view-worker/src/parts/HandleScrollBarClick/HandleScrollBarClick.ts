import type { State } from '../State/State.ts'
import { getNewDeltaPercent } from '../GetNewDeltaYPercent/GetNewDeltaYPercent.ts'
import * as ScrollBarFunctions from '../ScrollBarFunctions/ScrollBarFunctions.ts'
import { setDeltaY } from '../SetDeltaY/SetDeltaY.ts'

export const handleScrollBarClick = (state: State, eventY: number): State => {
  // TODO move this to list
  const { y, deltaY, headerHeight, finalDeltaY, scrollBarHeight, height } = state
  const contentHeight = height - headerHeight
  const relativeY = eventY - y - headerHeight
  const currentScrollBarY = ScrollBarFunctions.getScrollBarY(deltaY, finalDeltaY, contentHeight, scrollBarHeight)
  const diff = relativeY - currentScrollBarY
  if (diff >= 0 && diff < scrollBarHeight) {
    return {
      ...state,
      handleOffset: diff,
      scrollBarActive: true,
    }
  }
  const { percent, handleOffset } = getNewDeltaPercent(contentHeight, scrollBarHeight, relativeY)
  const newDeltaY = percent * finalDeltaY
  return {
    ...setDeltaY(state, newDeltaY),
    handleOffset,
    scrollBarActive: true,
  }
}
