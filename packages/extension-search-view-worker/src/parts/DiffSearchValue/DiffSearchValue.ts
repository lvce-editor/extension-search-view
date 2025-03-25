import type { State } from '../State/State.ts'
import * as DiffType from '../DiffType/DiffType.ts'
import * as InputSource from '../InputSource/InputSource.ts'

export const diffType = DiffType.RenderSearchValue

export const isEqual = (oldState: State, newState: State): boolean => {
  return newState.inputSource === InputSource.User || oldState.searchValue === newState.searchValue
}
