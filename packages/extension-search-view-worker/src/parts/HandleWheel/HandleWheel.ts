import type { State } from '../State/State.ts'
import * as Assert from '../Assert/Assert.ts'
import { setDeltaY } from '../SetDeltaY/SetDeltaY.ts'

export const handleWheel = (state: State, deltaMode: number, deltaY: number): any => {
  Assert.number(deltaMode)
  Assert.number(deltaY)
  return setDeltaY(state, state.deltaY + deltaY)
}
