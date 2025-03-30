import * as ExtensionSearchViewStates from '../ExtensionSearchViewStates/ExtensionSearchViewStates.js'

export const dispose = (uid: number): void => {
  ExtensionSearchViewStates.remove(uid)
}
