import type { State } from '../State/State.ts'

export const isEqual = (oldState: State, newState: State): boolean => {
  if (!newState.focus) {
    return true
  }
  return oldState.focus === newState.focus && oldState.inputSource === newState.inputSource
}
