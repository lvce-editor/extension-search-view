import type { AsyncCommandContext } from '@lvce-editor/viewlet-registry'
import type { State } from '../State/State.ts'
import * as ExtensionLoading from '../ExtensionLoading/ExtensionLoading.ts'
import * as GetAllExtensions from '../GetAllExtensions/GetAllExtensions.ts'
import * as GetViewletSize from '../GetViewletSize/GetViewletSize.ts'
import * as HandleChange from '../HandleChange/HandleChange.ts'
import * as HandleInput from '../HandleInput/HandleInput.ts'
import * as InputSource from '../InputSource/InputSource.ts'
import * as IsFirefox from '../IsFirefox/IsFirefox.ts'
import * as NormalizeExtensions from '../NormalizeExtensions/NormalizeExtensions.ts'
import * as RestoreState from '../RestoreState/RestoreState.ts'

export const loadContentWithContext = async (context: AsyncCommandContext<State>, savedState: unknown): Promise<void> => {
  const { uid } = context.getState()
  const loadToken = ExtensionLoading.getToken(uid)
  try {
    const initialState = context.getState()
    const { assetDir, platform, width } = initialState
    const { deltaY, searchValue: restoredSearchValue } = RestoreState.restoreState(savedState)
    const size = GetViewletSize.getViewletSize(width)
    const scrollSensitivity = IsFirefox.getIsFirefox() ? 2.5 : 1
    await context.updateState((state) => {
      if (!state.initial) {
        return state
      }
      return {
        ...state,
        deltaY,
        initial: false,
        inputSource: InputSource.Script,
        scrollSensitivity,
        searchValue: restoredSearchValue,
        size,
      }
    })
    const allExtensions = await GetAllExtensions.getAllExtensions(platform)
    const normalized = NormalizeExtensions.normalizeExtensions(allExtensions, platform, assetDir)
    await context.updateState((state) => ({
      ...state,
      allExtensions: normalized,
    }))
    await HandleChange.handleChangeWithContext(context, {}, false)
  } finally {
    ExtensionLoading.finish(uid, loadToken)
  }
}

export const loadContent = async (state: State, savedState: unknown): Promise<State> => {
  const { assetDir, platform, width } = state
  const { deltaY, searchValue } = RestoreState.restoreState(savedState)
  // TODO just get local extensions on demand (not when query string is already different)
  const allExtensions = await GetAllExtensions.getAllExtensions(platform)
  const size = GetViewletSize.getViewletSize(width)
  const normalized = NormalizeExtensions.normalizeExtensions(allExtensions, platform, assetDir)
  const scrollSensitivity = IsFirefox.getIsFirefox() ? 2.5 : 1
  const updatedState = await HandleInput.handleInput(
    {
      ...state,
      allExtensions: normalized,
      deltaY,
      initial: false,
      inputSource: InputSource.Script,
      scrollSensitivity,
      size,
    },
    searchValue,
    InputSource.Script,
  )
  return updatedState
}
