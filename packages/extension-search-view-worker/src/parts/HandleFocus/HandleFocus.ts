import * as FocusId from '../FocusId/FocusId.ts'
import type { State } from '../State/State.ts'

export const handleFocus = async (state: State): Promise<State> => {
  console.log('got focus')
  return {
    ...state,
    focus: FocusId.List,
  }
}
