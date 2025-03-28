import type { State } from '../State/State.ts'
import * as DiffType from '../DiffType/DiffType.ts'

export const diffType = DiffType.RenderItems

export const isEqual = (oldState: State, newState: State): boolean => {
  return (
    oldState.items === newState.items &&
    oldState.minLineY === newState.minLineY &&
    oldState.maxLineY === newState.maxLineY &&
    oldState.deltaY === newState.deltaY &&
    oldState.focusedIndex === newState.focusedIndex
  )
}
