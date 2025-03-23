import type { State } from '../State/State.ts'
import * as DiffType from '../DiffType/DiffType.ts'

export const diffType = DiffType.RenderHeader

export const isEqual = (oldState: State, newState: State): boolean => {
  return oldState.placeholder === newState.placeholder
}
