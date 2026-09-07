import type { State } from '../State/State.ts'

export const selectNextCompletion = (state: State): State => {
  const { completionFocusedIndex, completionItems, suggestOpen } = state
  if (!suggestOpen || completionItems.length === 0) {
    return state
  }
  return {
    ...state,
    completionFocusedIndex: (completionFocusedIndex + 1) % completionItems.length,
  }
}
