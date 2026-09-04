import * as ExtensionSearchViewStates from '../ExtensionSearchViewStates/ExtensionSearchViewStates.ts'
import type { State } from '../State/State.ts'

const applyComponentState = (currentState: State, state: State): State => {
  if (!state || typeof state !== 'object' || Array.isArray(state)) {
    throw new TypeError('Extension Search state must be an object')
  }
  if (state.uid !== currentState.uid) {
    throw new Error(`Extension Search state uid must remain ${currentState.uid}`)
  }
  return state
}

export const setComponentState = ExtensionSearchViewStates.wrapCommand(applyComponentState)
