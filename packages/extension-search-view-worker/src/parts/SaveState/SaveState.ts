import type { SavedState } from '../SavedState/SavedState.ts'
import type { State } from '../State/State.ts'

export const saveState = (state: State): SavedState => {
  const { deltaY, searchValue } = state
  return {
    deltaY,
    searchValue,
  }
}
