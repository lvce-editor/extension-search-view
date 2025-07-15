import { focusIndex } from '../FocusIndex/FocusIndex.ts'
import { getExtensionDetailUri } from '../GetExtensionDetailUri/GetExtensionDetailUri.ts'
import * as OpenUri from '../OpenUri/OpenUri.ts'
import * as FocusId from '../FocusId/FocusId.ts'
import { State } from '../State/State.ts'

export const handleClick = async (state: State, index: number): Promise<State> => {
  const { items, minLineY } = state
  const actualIndex = index + minLineY
  const extension = items[actualIndex]
  const uri = getExtensionDetailUri(extension.id)
  await OpenUri.openUri(uri)
  const partialNewState = focusIndex(state, actualIndex)
  const newState = {
    ...partialNewState,
    focus: FocusId.List,
  }
  return newState
}
