import type { State } from '../State/State.ts'
import * as ExtensionSearchViewStates from '../ExtensionSearchViewStates/ExtensionSearchViewStates.ts'

const applyComponentState = (currentState: State, state: State): State => {
  if (!state || typeof state !== 'object' || Array.isArray(state)) {
    throw new TypeError('Extension Search state must be an object')
  }
  const { uid } = state
  const { uid: currentUid } = currentState
  if (uid !== currentUid) {
    throw new Error(`Extension Search state uid must remain ${currentUid}`)
  }
  return state
}

export const setComponentState = ExtensionSearchViewStates.wrapCommand(applyComponentState)
