import type { State } from '../State/State.ts'

export const isEqual = (oldState: State, newState: State): boolean => {
  return oldState.placeholder === newState.placeholder
}
