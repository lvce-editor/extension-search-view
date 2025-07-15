import type { State } from '../State/State.ts'
import * as FocusId from '../FocusId/FocusId.ts'

export const handleBlur = (state: State): State => {
  return {
    ...state,
    focus: FocusId.None,
  }
}
