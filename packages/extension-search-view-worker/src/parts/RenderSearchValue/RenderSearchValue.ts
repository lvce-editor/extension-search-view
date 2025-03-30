import type { State } from '../State/State.ts'
import * as RenderMethod from '../RenderMethod/RenderMethod.ts'

export const renderSearchValue = (newState: State): readonly any[] => {
  return [/* method */ RenderMethod.SetSearchValue, '', newState.searchValue]
}
