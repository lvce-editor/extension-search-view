import type { State } from '../State/State.ts'
import * as GetFinalDeltaY from '../GetFinalDeltaY/GetFinalDeltaY.ts'
import * as GetListHeight from '../GetListHeight/GetListHeight.ts'
import * as GetNumberOfVisibleItems from '../GetNumberOfVisibleItems/GetNumberOfVisibleItems.ts'
import * as GetScrollBarSize from '../GetScrollBarSize/GetScrollBarSize.ts'
import * as ScrollBarFunctions from '../ScrollBarFunctions/ScrollBarFunctions.ts'

interface Dimensions {
  readonly x: number
  readonly y: number
  readonly width: number
  readonly height: number
}

export const resize = async (state: State, dimensions: Dimensions): Promise<State> => {
  const { items, itemHeight, headerHeight, minimumSliderSize } = state
  const { x, y, width, height } = dimensions
  const total = items.length
  const listHeight = GetListHeight.getListHeight(total, itemHeight, height)
  const contentHeight = total * itemHeight
  const scrollBarHeight = GetScrollBarSize.getScrollBarSize(height, contentHeight, minimumSliderSize)
  const numberOfVisible = GetNumberOfVisibleItems.getNumberOfVisibleItems(listHeight, itemHeight)
  const maxLineY = Math.min(numberOfVisible, total)
  const finalDeltaY = GetFinalDeltaY.getFinalDeltaY(listHeight, itemHeight, total)
  const scrollBarY = ScrollBarFunctions.getScrollBarY(0, finalDeltaY, height - headerHeight, scrollBarHeight)
  return {
    ...state,
    finalDeltaY,
    height,
    maxLineY,
    scrollBarHeight,
    scrollBarY,
    width,
    x,
    y,
  }
}
