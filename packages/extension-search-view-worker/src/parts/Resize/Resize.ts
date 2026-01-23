import type { Dimensions } from '../Dimensions/Dimensions.ts'
import type { State } from '../State/State.ts'
import * as GetFinalDeltaY from '../GetFinalDeltaY/GetFinalDeltaY.ts'
import * as GetListHeight from '../GetListHeight/GetListHeight.ts'
import * as GetNumberOfVisibleItems from '../GetNumberOfVisibleItems/GetNumberOfVisibleItems.ts'
import * as GetScrollBarSize from '../GetScrollBarSize/GetScrollBarSize.ts'
import * as ScrollBarFunctions from '../ScrollBarFunctions/ScrollBarFunctions.ts'

export const resize = async (state: State, dimensions: Dimensions): Promise<State> => {
  const { deltaY, headerHeight, itemHeight, items, minimumSliderSize } = state
  const { height, width, x, y } = dimensions
  const total = items.length
  const listHeight = GetListHeight.getListHeight(total, itemHeight, height)
  const contentHeight = total * itemHeight
  const scrollBarHeight = GetScrollBarSize.getScrollBarSize(height, contentHeight, minimumSliderSize)
  const numberOfVisible = GetNumberOfVisibleItems.getNumberOfVisibleItems(listHeight, itemHeight)
  const minLineY = Math.floor(deltaY / itemHeight)
  const maxLineY = Math.min(minLineY + numberOfVisible, total)
  const finalDeltaY = GetFinalDeltaY.getFinalDeltaY(listHeight, itemHeight, total)
  const scrollBarY = ScrollBarFunctions.getScrollBarY(deltaY, finalDeltaY, height - headerHeight, scrollBarHeight)
  return {
    ...state,
    finalDeltaY,
    height,
    maxLineY,
    minLineY,
    scrollBarHeight,
    scrollBarY,
    width,
    x,
    y,
  }
}
