import type { State } from '../State/State.ts'

export const isEqual = (oldState: State, newState: State): boolean => {
  return (
    newState.scrollBarHeight === newState.scrollBarHeight &&
    oldState.scrollBarY === newState.scrollBarY &&
    oldState.initial === newState.initial &&
    oldState.deltaY === newState.deltaY
  )
}
