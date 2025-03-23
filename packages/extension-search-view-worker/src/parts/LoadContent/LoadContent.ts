import * as ExtensionManagement from '../ExtensionManagement/ExtensionManagement.ts'
import * as ExtensionSearchViewStates from '../ExtensionSearchViewStates/ExtensionSearchViewStates.ts'
import * as GetViewletSize from '../GetViewletSize/GetViewletSize.ts'
import * as HandleInput from '../HandleInput/HandleInput.ts'
import { restoreState } from '../RestoreState/RestoreState.ts'

export const loadContent = async (uid: number, savedState: unknown): Promise<void> => {
  const { newState } = ExtensionSearchViewStates.get(uid)
  const { width, platform } = newState
  const { searchValue } = restoreState(savedState)
  // TODO just get local extensions on demand (not when query string is already different)
  const allExtensions = await ExtensionManagement.getAllExtensions(platform)
  const size = GetViewletSize.getViewletSize(width)
  const updatedState = await HandleInput.handleInput({ ...newState, allExtensions, size }, searchValue)
  ExtensionSearchViewStates.set(uid, newState, updatedState)
}
