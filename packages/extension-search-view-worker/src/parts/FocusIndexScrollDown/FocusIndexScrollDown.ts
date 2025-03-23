import * as GetNumberOfVisibleItems from '../GetNumberOfVisibleItems/GetNumberOfVisibleItems.ts'

export const focusIndexScrollDown = (state: any, index: number, listHeight: number, itemHeight: number, itemsLength: number): any => {
  const newMaxLineY = Math.min(index + 1, itemsLength)
  const fittingItems = GetNumberOfVisibleItems.getNumberOfVisibleItems(listHeight, itemHeight)
  const newMinLineY = Math.max(newMaxLineY - fittingItems, 0)
  const newDeltaY = itemsLength < fittingItems ? 0 : newMinLineY * itemHeight - (listHeight % itemHeight) + itemHeight
  return {
    ...state,
    focusedIndex: index,
    minLineY: newMinLineY,
    maxLineY: newMaxLineY,
    focused: true,
    deltaY: newDeltaY,
  }
}
