import type { State } from '../State/State.ts'
import * as ViewletExtensionsHandleInput from '../HandleInput/HandleInput.ts'

export const clearSearchResults = (state: State): Promise<State> => {
  return ViewletExtensionsHandleInput.handleInput(state, '')
}
