import * as InputName from '../InputName/InputName.ts'
import type { State } from '../State/State.ts'

export const renderSearchValue = (newState: State): readonly any[] => {
  return [/* method */ 'Viewlet.setValueByName', newState.uid, InputName.Extensions, newState.searchValue]
}
