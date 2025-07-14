import type { State } from '../State/State.ts'

export const isEqual = (oldState: State, newState: State): boolean => {
  return (
    oldState.items === newState.items &&
    oldState.minLineY === newState.minLineY &&
    oldState.maxLineY === newState.maxLineY &&
    oldState.deltaY === newState.deltaY &&
    oldState.focusedIndex === newState.focusedIndex &&
    oldState.message === newState.message &&
    oldState.inputActions === newState.inputActions &&
    oldState.placeholder === newState.placeholder
  )
}
