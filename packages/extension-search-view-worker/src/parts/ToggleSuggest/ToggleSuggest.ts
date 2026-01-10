import type { State } from '../State/State.ts'

export const toggleSuggest = (state: State): State => {
  return {
    ...state,
    suggestOpen: !state.suggestOpen,
  }
}
