import type { State } from '../State/State.ts'

export const closeSuggest = (state: State): State => {
  const { suggestOpen } = state
  if (!suggestOpen) {
    return state
  }
  return {
    ...state,
    suggestOpen: false,
  }
}
