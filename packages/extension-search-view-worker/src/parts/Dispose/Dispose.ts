import * as ExtensionLoading from '../ExtensionLoading/ExtensionLoading.ts'
import * as ExtensionSearchViewStates from '../ExtensionSearchViewStates/ExtensionSearchViewStates.ts'

export const dispose = (uid: number): void => {
  ExtensionLoading.finish(uid)
  ExtensionSearchViewStates.dispose(uid)
}
