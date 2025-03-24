import type { State } from '../State/State.ts'
import { focusIndex } from '../FocusIndex/FocusIndex.ts'
import * as ListIndex from '../ListIndex/ListIndex.ts'

export const focusLast = (state: State): State => {
  const { items } = state
  const lastIndex = ListIndex.last(items)
  return focusIndex(state, lastIndex)
}
