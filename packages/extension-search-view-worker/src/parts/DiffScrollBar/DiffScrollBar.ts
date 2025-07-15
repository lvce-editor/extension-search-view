import type { State } from '../State/State.ts'

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
