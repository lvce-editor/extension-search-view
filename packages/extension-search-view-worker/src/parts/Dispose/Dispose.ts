import * as ExtensionLoading from '../ExtensionLoading/ExtensionLoading.ts'
import * as ExtensionSearchViewStates from '../ExtensionSearchViewStates/ExtensionSearchViewStates.ts'

export const dispose = (uid: number): void => {
  ExtensionLoading.cancel(uid)
  ExtensionSearchViewStates.dispose(uid)
}
