import type { State } from '../State/State.ts'
import { getCompletionItems } from '../GetCompletionItems/GetCompletionItems.ts'

export const openSuggest = (state: State): State => {
  const { cursorOffset, searchValue } = state
  const completionItems = getCompletionItems(searchValue, cursorOffset)
  if (completionItems.length === 0) {
    return state
  }
  return {
    ...state,
    completionFocusedIndex: 0,
    completionItems,
    suggestOpen: true,
  }
}
