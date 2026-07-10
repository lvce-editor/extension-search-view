import { InputSource } from '@lvce-editor/constants'
import type { State } from '../State/State.ts'
import * as FocusId from '../FocusId/FocusId.ts'
import * as HandleChange from '../HandleChange/HandleChange.ts'

export const clearSearchResults = (state: State): Promise<State> => {
  return HandleChange.handleChange(state, {
    ...state,
    completionFocusedIndex: 0,
    completionItems: [],
    cursorOffset: 0,
    focus: FocusId.Input,
    inputSource: InputSource.Script,
    searchValue: '',
    suggestOpen: false,
  })
}
