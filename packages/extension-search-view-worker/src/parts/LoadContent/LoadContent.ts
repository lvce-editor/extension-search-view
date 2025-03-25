import * as ExtensionManagement from '../ExtensionManagement/ExtensionManagement.ts'
import * as ExtensionSearchViewStates from '../ExtensionSearchViewStates/ExtensionSearchViewStates.ts'
import * as GetViewletSize from '../GetViewletSize/GetViewletSize.ts'
import * as HandleInput from '../HandleInput/HandleInput.ts'
import * as InputSource from '../InputSource/InputSource.ts'
import * as RestoreState from '../RestoreState/RestoreState.ts'

export const loadContent = async (uid: number, savedState: unknown): Promise<void> => {
  const { newState } = ExtensionSearchViewStates.get(uid)
  const { width, platform } = newState
  const { searchValue } = RestoreState.restoreState(savedState)
  // TODO just get local extensions on demand (not when query string is already different)
  const allExtensions = await ExtensionManagement.getAllExtensions(platform)
  const size = GetViewletSize.getViewletSize(width)
  const updatedState = await HandleInput.handleInput({ ...newState, allExtensions, size, inputSource: InputSource.Script }, searchValue)
  ExtensionSearchViewStates.set(uid, newState, updatedState)
}
