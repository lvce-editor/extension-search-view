import type { State } from '../State/State.ts'

export interface StateHandler {
  (state: State, ...args: readonly any[]): State | Promise<State>
}
