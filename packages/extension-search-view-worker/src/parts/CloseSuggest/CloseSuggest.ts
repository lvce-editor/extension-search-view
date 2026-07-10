import type { State } from '../State/State.ts'

export const closeSuggest = (state: State): State => {
  if (!state.suggestOpen) {
    return state
  }
  return {
    ...state,
    suggestOpen: false,
  }
}
