import type { State } from '../State/State.ts'
import * as GetAllExtensions from '../GetAllExtensions/GetAllExtensions.ts'
import * as HandleChange from '../HandleChange/HandleChange.ts'
import * as NormalizeExtensions from '../NormalizeExtensions/NormalizeExtensions.ts'

export const handleExtensionsChanged = async (state: State): Promise<State> => {
  const { assetDir, platform } = state
  const allExtensions = await GetAllExtensions.getAllExtensions(platform)
  const normalized = NormalizeExtensions.normalizeExtensions(allExtensions, platform, assetDir)
  return HandleChange.handleChange(
    {
      ...state,
      allExtensions: normalized,
    },
    {},
  )
}
