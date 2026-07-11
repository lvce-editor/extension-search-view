import type { State } from '../State/State.ts'
import * as FocusId from '../FocusId/FocusId.ts'
import { getExtensionDetailUri } from '../GetExtensionDetailUri/GetExtensionDetailUri.ts'
import * as OpenUri from '../OpenUri/OpenUri.ts'
import { selectIndex } from '../SelectIndex/SelectIndex.ts'

export const handleClick = async (state: State, index: number): Promise<State> => {
  const { items, minLineY } = state
  const actualIndex = index + minLineY
  if (actualIndex < 0 || actualIndex >= items.length) {
    return {
      ...state,
      focus: FocusId.List,
      focusedIndex: -1,
    }
  }
  const extension = items[actualIndex]
  const uri = getExtensionDetailUri(extension.id)
  await OpenUri.openUri(uri)
  const partialNewState = selectIndex(state, actualIndex)
  const newState = {
    ...partialNewState,
    focus: FocusId.List,
  }
  return newState
}
