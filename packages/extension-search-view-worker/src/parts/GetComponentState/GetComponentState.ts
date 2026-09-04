import * as ExtensionSearchViewStates from '../ExtensionSearchViewStates/ExtensionSearchViewStates.ts'
import type { State } from '../State/State.ts'

export const getComponentState = (uid: number): State => {
  return ExtensionSearchViewStates.get(uid).newState
}
