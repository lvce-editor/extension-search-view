import type { State } from '../State/State.ts'
import * as FocusId from '../FocusId/FocusId.ts'
import { getCompletionRange } from '../GetCompletionRange/GetCompletionRange.ts'
import { handleChange } from '../HandleChange/HandleChange.ts'
import * as InputSource from '../InputSource/InputSource.ts'

export const acceptCompletion = async (state: State, label?: string): Promise<State> => {
  const completion = label || state.completionItems[state.completionFocusedIndex]?.label
  if (!completion) {
    return state
  }
  const range = getCompletionRange(state.searchValue, state.cursorOffset)
  if (!range) {
    return state
  }
  const searchValue = `${state.searchValue.slice(0, range.start)}${completion}${state.searchValue.slice(range.end)}`
  return handleChange(state, {
    completionFocusedIndex: 0,
    completionItems: [],
    cursorOffset: range.start + completion.length,
    focus: FocusId.Input,
    inputSource: InputSource.Script,
    searchValue,
    suggestOpen: false,
  })
}
