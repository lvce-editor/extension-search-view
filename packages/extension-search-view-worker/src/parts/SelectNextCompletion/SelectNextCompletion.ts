import type { State } from '../State/State.ts'

export const selectNextCompletion = (state: State): State => {
  if (!state.suggestOpen || state.completionItems.length === 0) {
    return state
  }
  return {
    ...state,
    completionFocusedIndex: (state.completionFocusedIndex + 1) % state.completionItems.length,
  }
}
