import type { State } from '../State/State.ts'

const states = Object.create(null)

export const get = (
  uid: number,
): {
  oldState: State
  newState: State
} => {
  return states[uid]
}

export const set = (uid: number, oldState: State, newState: State): void => {
  states[uid] = {
    oldState,
    newState,
  }
}
