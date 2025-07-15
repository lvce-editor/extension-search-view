import type { State } from '../State/State.ts'
import * as FocusId from '../FocusId/FocusId.ts'

export const handleFocus = async (state: State): Promise<State> => {
  return {
    ...state,
    focus: FocusId.List,
  }
}
