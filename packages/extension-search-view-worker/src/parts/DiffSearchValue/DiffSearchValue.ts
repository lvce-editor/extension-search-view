import type { State } from '../State/State.ts'
import * as DiffType from '../DiffType/DiffType.ts'

export const diffType = DiffType.RenderSearchValue

export const isEqual = (oldState: State, newState: State): boolean => {
  return oldState.searchValue === newState.searchValue
}
