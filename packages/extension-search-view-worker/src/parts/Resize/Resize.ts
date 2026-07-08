import type { Dimensions } from '../Dimensions/Dimensions.ts'
import type { State } from '../State/State.ts'
import * as Clamp from '../Clamp/Clamp.ts'
import * as GetFinalDeltaY from '../GetFinalDeltaY/GetFinalDeltaY.ts'
import * as GetListHeight from '../GetListHeight/GetListHeight.ts'
import * as GetNumberOfVisibleItems from '../GetNumberOfVisibleItems/GetNumberOfVisibleItems.ts'
import * as GetScrollBarSize from '../GetScrollBarSize/GetScrollBarSize.ts'
import * as ScrollBarFunctions from '../ScrollBarFunctions/ScrollBarFunctions.ts'

export const resize = async (state: State, dimensions: Dimensions): Promise<State> => {
  const { deltaY, headerHeight, itemHeight, items, minimumSliderSize } = state
  const { height, width, x, y } = dimensions
  const total = items.length
  const availableHeight = height - headerHeight
  const listHeight = GetListHeight.getListHeight(total, itemHeight, availableHeight)
  const contentHeight = total * itemHeight
  const scrollBarHeight = GetScrollBarSize.getScrollBarSize(listHeight, contentHeight, minimumSliderSize)
  const numberOfVisible = GetNumberOfVisibleItems.getNumberOfVisibleItems(listHeight, itemHeight)
  const finalDeltaY = GetFinalDeltaY.getFinalDeltaY(listHeight, itemHeight, total)
  const newDeltaY = Clamp.clamp(deltaY, 0, finalDeltaY)
  const minLineY = Math.floor(newDeltaY / itemHeight)
  const maxLineY = Math.min(minLineY + numberOfVisible, total)
  const scrollBarY = ScrollBarFunctions.getScrollBarY(newDeltaY, finalDeltaY, listHeight, scrollBarHeight)
  return {
    ...state,
    deltaY: newDeltaY,
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
