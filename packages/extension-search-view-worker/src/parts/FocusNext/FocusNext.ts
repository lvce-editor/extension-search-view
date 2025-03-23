import type { State } from '../State/State.ts'
import { focusIndex } from '../FocusIndex/FocusIndex.ts'
import * as ListIndex from '../ListIndex/ListIndex.ts'

export const focusNext = (state: State): any => {
  const { focusedIndex, items } = state
  const nextIndex = ListIndex.next(items, focusedIndex)
  return focusIndex(state, nextIndex)
}
