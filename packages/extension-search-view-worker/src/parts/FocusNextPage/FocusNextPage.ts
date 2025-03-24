import type { State } from '../State/State.ts'
import * as Arrays from '../Arrays/Arrays.ts'
import { focusIndex } from '../FocusIndex/FocusIndex.ts'

export const focusNextPage = (state: State): State => {
  const { focusedIndex, items, maxLineY, minLineY } = state
  if (Arrays.isLastIndex(items, focusedIndex)) {
    return state
  }
  const indexNextPage = Math.min(maxLineY + (maxLineY - minLineY) - 2, Arrays.lastIndex(items))
  return focusIndex(state, indexNextPage)
}
