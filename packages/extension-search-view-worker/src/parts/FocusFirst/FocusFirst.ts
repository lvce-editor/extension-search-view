import type { State } from '../State/State.ts'
import { focusIndex } from '../FocusIndex/FocusIndex.ts'
import * as ListIndex from '../ListIndex/ListIndex.ts'

export const focusFirst = (state: State): State => {
  const firstIndex = ListIndex.first()
  return focusIndex(state, firstIndex)
}
