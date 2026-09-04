import type { State } from '../State/State.ts'
import * as ExtensionSearchViewStates from '../ExtensionSearchViewStates/ExtensionSearchViewStates.ts'

export const getComponentState = (uid: number): State => {
  return ExtensionSearchViewStates.get(uid).newState
}
