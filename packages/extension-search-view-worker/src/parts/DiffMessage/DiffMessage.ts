import * as DiffType from '../DiffType/DiffType.ts'
import { State } from '../State/State.ts'

export const diffType = DiffType.RenderMessage

export const isEqual = (oldState: State, newState: State): boolean => {
  return oldState.message === newState.message
}
