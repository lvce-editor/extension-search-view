import type { State } from '../State/State.ts'
import { focusIndex } from '../FocusIndex/FocusIndex.ts'

export const focusPreviousPage = async (state: State): Promise<any> => {
  const { focusedIndex, minLineY, maxLineY } = state
  if (focusedIndex === 0 || focusedIndex === -1) {
    return state
  }
  const indexPreviousPage = Math.max(minLineY - (maxLineY - minLineY) + 1, 0)
  return focusIndex(state, indexPreviousPage)
}
