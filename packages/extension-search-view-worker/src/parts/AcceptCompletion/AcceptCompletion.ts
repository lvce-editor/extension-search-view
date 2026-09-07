import type { AsyncCommandContext } from '@lvce-editor/viewlet-registry'
import type { State } from '../State/State.ts'
import * as FocusId from '../FocusId/FocusId.ts'
import { getCompletionRange } from '../GetCompletionRange/GetCompletionRange.ts'
import * as HandleChange from '../HandleChange/HandleChange.ts'
import * as InputSource from '../InputSource/InputSource.ts'

const RE_WHITESPACE = /\s/

const getCompletionText = (searchValue: string, completion: string, rangeEnd: number): string => {
  const hasTrailingWhitespace = RE_WHITESPACE.test(searchValue[rangeEnd] || '')
  return completion.endsWith(':') || hasTrailingWhitespace ? completion : `${completion} `
}

export const acceptCompletionWithContext = async (context: AsyncCommandContext<State>, label?: string): Promise<void> => {
  const state = context.getState()
  const { completionFocusedIndex, completionItems, cursorOffset, searchValue } = state
  const completion = label || completionItems[completionFocusedIndex]?.label
  if (!completion) {
    return
  }
  const range = getCompletionRange(searchValue, cursorOffset)
  if (!range) {
    return
  }
  const completionText = getCompletionText(searchValue, completion, range.end)
  const newSearchValue = `${searchValue.slice(0, range.start)}${completionText}${searchValue.slice(range.end)}`
  await HandleChange.handleChangeWithContext(context, {
    completionFocusedIndex: 0,
    completionItems: [],
    cursorOffset: range.start + completionText.length,
    focus: FocusId.Input,
    inputSource: InputSource.Script,
    searchValue: newSearchValue,
    suggestOpen: false,
  })
}

export const acceptCompletion = async (state: State, label?: string): Promise<State> => {
  const { completionFocusedIndex, completionItems, cursorOffset, searchValue } = state
  const completion = label || completionItems[completionFocusedIndex]?.label
  if (!completion) {
    return state
  }
  const range = getCompletionRange(searchValue, cursorOffset)
  if (!range) {
    return state
  }
  const completionText = getCompletionText(searchValue, completion, range.end)
  const newSearchValue = `${searchValue.slice(0, range.start)}${completionText}${searchValue.slice(range.end)}`
  return HandleChange.handleChange(state, {
    completionFocusedIndex: 0,
    completionItems: [],
    cursorOffset: range.start + completionText.length,
    focus: FocusId.Input,
    inputSource: InputSource.Script,
    searchValue: newSearchValue,
    suggestOpen: false,
  })
}
