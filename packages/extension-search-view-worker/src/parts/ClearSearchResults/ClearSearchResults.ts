import { InputSource } from '@lvce-editor/constants'
import type { State } from '../State/State.ts'
import * as FocusId from '../FocusId/FocusId.ts'
import * as HandleChange from '../HandleChange/HandleChange.ts'

export const clearSearchResults = (state: State): Promise<State> => {
  return HandleChange.handleChange(state, {
    ...state,
    focus: FocusId.Input,
    searchValue: '',
    inputSource: InputSource.Script,
  })
}
