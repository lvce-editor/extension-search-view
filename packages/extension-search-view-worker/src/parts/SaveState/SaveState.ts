import type { SavedState } from '../SavedState/SavedState.ts'
import * as ExtensionSearchViewStates from '../ExtensionSearchViewStates/ExtensionSearchViewStates.ts'

export const saveState = (uid: number): SavedState => {
  const { newState } = ExtensionSearchViewStates.get(uid)
  const { searchValue } = newState
  return {
    searchValue,
  }
}
