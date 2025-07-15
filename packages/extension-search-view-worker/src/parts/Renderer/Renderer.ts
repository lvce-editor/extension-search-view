import type { State } from '../State/State.ts'

export interface Renderer {
  (newState: State, oldState: State): readonly any[]
}
