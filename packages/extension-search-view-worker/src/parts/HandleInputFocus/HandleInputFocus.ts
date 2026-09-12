import type { AsyncCommandContext } from '@lvce-editor/viewlet-registry'
import type { State } from '../State/State.ts'
import * as FocusId from '../FocusId/FocusId.ts'

export const handleInputFocus = (state: State): State => {
  return {
    ...state,
    focus: FocusId.Input,
  }
}

export const handleInputFocusWithContext = async (context: AsyncCommandContext<State>): Promise<void> => {
  await context.updateState(handleInputFocus)
}
