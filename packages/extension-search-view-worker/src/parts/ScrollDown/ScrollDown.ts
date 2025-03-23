import type { State } from '../State/State.ts'
import * as SetDeltaY from '../SetDeltaY/SetDeltaY.ts'

export const scrollDown = (state: State): State => {
  const { finalDeltaY, deltaY } = state
  const newDeltaY = Math.min(deltaY + 20, finalDeltaY)
  return SetDeltaY.setDeltaY(state, newDeltaY)
}
