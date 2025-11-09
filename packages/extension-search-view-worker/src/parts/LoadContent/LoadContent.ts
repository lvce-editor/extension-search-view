import type { State } from '../State/State.ts'
import * as GetAllExtensions from '../GetAllExtensions/GetAllExtensions.ts'
import * as GetViewletSize from '../GetViewletSize/GetViewletSize.ts'
import * as HandleInput from '../HandleInput/HandleInput.ts'
import * as InputSource from '../InputSource/InputSource.ts'
import * as NormalizeExtensions from '../NormalizeExtensions/NormalizeExtensions.ts'
import * as RestoreState from '../RestoreState/RestoreState.ts'

export const loadContent = async (state: State, savedState: unknown): Promise<State> => {
  const { width, platform, assetDir } = state
  const { searchValue, deltaY } = RestoreState.restoreState(savedState)
  // TODO just get local extensions on demand (not when query string is already different)
  const allExtensions = await GetAllExtensions.getAllExtensions(platform)
  const size = GetViewletSize.getViewletSize(width)
  const normalized = NormalizeExtensions.normalizeExtension(allExtensions, platform, assetDir)
  const updatedState = await HandleInput.handleInput(
    {
      ...state,
      allExtensions: normalized,
      size,
      inputSource: InputSource.Script,
      deltaY,
    },
    searchValue,
    InputSource.Script,
  )
  return updatedState
}
