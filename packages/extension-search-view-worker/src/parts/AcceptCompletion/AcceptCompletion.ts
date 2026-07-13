import type { AsyncCommandContext } from '@lvce-editor/viewlet-registry'
import type { State } from '../State/State.ts'
import * as FocusId from '../FocusId/FocusId.ts'
import { getCompletionRange } from '../GetCompletionRange/GetCompletionRange.ts'
import * as HandleChange from '../HandleChange/HandleChange.ts'
import * as InputSource from '../InputSource/InputSource.ts'

export const acceptCompletionWithContext = async (context: AsyncCommandContext<State>, label?: string): Promise<void> => {
  const state = context.getState()
  const completion = label || state.completionItems[state.completionFocusedIndex]?.label
  if (!completion) {
    return
  }
  const range = getCompletionRange(state.searchValue, state.cursorOffset)
  if (!range) {
    return
  }
  const searchValue = `${state.searchValue.slice(0, range.start)}${completion}${state.searchValue.slice(range.end)}`
  await HandleChange.handleChangeWithContext(context, {
    completionFocusedIndex: 0,
    completionItems: [],
    cursorOffset: range.start + completion.length,
    focus: FocusId.Input,
    inputSource: InputSource.Script,
    searchValue,
    suggestOpen: false,
  })
}

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
  return HandleChange.handleChange(state, {
    completionFocusedIndex: 0,
    completionItems: [],
    cursorOffset: range.start + completion.length,
    focus: FocusId.Input,
    inputSource: InputSource.Script,
    searchValue,
    suggestOpen: false,
  })
}
