import { focusIndex } from '../FocusIndex/FocusIndex.ts'
import * as ListIndex from '../ListIndex/ListIndex.ts'
import { State } from '../State/State.ts'

export const focusFirst = (state: State): State => {
  const firstIndex = ListIndex.first()
  return focusIndex(state, firstIndex)
}
