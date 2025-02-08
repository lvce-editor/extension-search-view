import * as ViewletExtensionsHandleInput from '../HandleInput/HandleInput.ts'

export const clearSearchResults = (state: any) => {
  return ViewletExtensionsHandleInput.handleInput(state, '')
}
