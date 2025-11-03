import { InputSource } from '@lvce-editor/constants'
import type { State } from '../State/State.ts'
import * as FocusId from '../FocusId/FocusId.ts'
import * as ViewletExtensionsHandleInput from '../HandleInput/HandleInput.ts'

export const clearSearchResults = (state: State): Promise<State> => {
  return ViewletExtensionsHandleInput.handleInput(
    {
      ...state,
      focus: FocusId.Input,
    },
    '',
    InputSource.Script,
  )
}
