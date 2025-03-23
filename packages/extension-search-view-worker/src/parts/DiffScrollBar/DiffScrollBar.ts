import type { State } from '../State/State.ts'
import * as DiffType from '../DiffType/DiffType.ts'

export const diffType = DiffType.RenderScrollBar

export const isEqual = (oldState: State, newState: State): boolean => {
  return (
    oldState.negativeMargin === newState.negativeMargin &&
    oldState.deltaY === newState.deltaY &&
    oldState.height === newState.height &&
    oldState.finalDeltaY === newState.finalDeltaY &&
    oldState.items.length === newState.items.length &&
    oldState.scrollBarActive === newState.scrollBarActive
  )
}
