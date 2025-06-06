import * as Assert from '../Assert/Assert.ts'
import * as Clamp from '../Clamp/Clamp.ts'
import * as GetNumberOfVisibleItems from '../GetNumberOfVisibleItems/GetNumberOfVisibleItems.ts'

export const setDeltaY = (state: any, value: number): any => {
  Assert.object(state)
  Assert.number(value)
  const { itemHeight, finalDeltaY, deltaY, height, headerHeight } = state
  const listHeight = height - headerHeight
  const newDeltaY = Clamp.clamp(value, 0, finalDeltaY)
  if (deltaY === newDeltaY) {
    return state
  }
  // TODO when it only moves by one px, extensions don't need to be rerendered, only negative margin
  const minLineY = Math.floor(newDeltaY / itemHeight)
  const maxLineY = minLineY + GetNumberOfVisibleItems.getNumberOfVisibleItems(listHeight, itemHeight)
  return {
    ...state,
    deltaY: newDeltaY,
    minLineY,
    maxLineY,
  }
}
