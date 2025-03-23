import { focusIndex } from '../FocusIndex/FocusIndex.ts'
import * as ListIndex from '../ListIndex/ListIndex.ts'

export const focusFirst = (state: any): Promise<any> => {
  const firstIndex = ListIndex.first()
  return focusIndex(state, firstIndex)
}
