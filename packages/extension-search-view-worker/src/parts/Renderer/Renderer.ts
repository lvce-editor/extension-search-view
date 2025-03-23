import type { State } from '../State/State.ts'

export interface Renderer {
  (oldState: State, newState: State): readonly any[]
}
