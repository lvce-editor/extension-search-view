import type { AsyncCommandContext } from '@lvce-editor/viewlet-registry'
import { InputSource } from '@lvce-editor/constants'
import type { State } from '../State/State.ts'
import * as FocusId from '../FocusId/FocusId.ts'
import * as HandleChange from '../HandleChange/HandleChange.ts'

export const clearSearchResultsWithContext = async (context: AsyncCommandContext<State>): Promise<void> => {
  await HandleChange.handleChangeWithContext(context, {
    completionFocusedIndex: 0,
    completionItems: [],
    cursorOffset: 0,
    focus: FocusId.Input,
    inputSource: InputSource.Script,
    searchValue: '',
    suggestOpen: false,
  })
}

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
