import * as ExtensionSearchViewStates from '../ExtensionSearchViewStates/ExtensionSearchViewStates.ts'

export const dispose = (uid: number): void => {
  ExtensionSearchViewStates.remove(uid)
}
