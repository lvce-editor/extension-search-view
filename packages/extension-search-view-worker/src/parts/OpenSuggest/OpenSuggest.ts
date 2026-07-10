import type { State } from '../State/State.ts'
import { getCompletionItems } from '../GetCompletionItems/GetCompletionItems.ts'

export const openSuggest = (state: State): State => {
  const completionItems = getCompletionItems(state.searchValue, state.cursorOffset)
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
