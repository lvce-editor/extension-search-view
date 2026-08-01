import type { AsyncCommandContext } from '@lvce-editor/viewlet-registry'
import type { State } from '../State/State.ts'
import * as ExtensionFilterParameter from '../ExtensionFilterParameter/ExtensionFilterParameter.ts'
import * as HandleInput from '../HandleInput/HandleInput.ts'
import * as InputSource from '../InputSource/InputSource.ts'

const RE_WHITESPACE_SEQUENCE = /\s+/

const addFilter = (searchValue: string, filter: string): string => {
  const values = searchValue.trim().split(RE_WHITESPACE_SEQUENCE)
  if (values.includes(filter)) {
    return searchValue
  }
  return `${searchValue.trim()} ${filter}`.trim()
}

export const filterByMostPopularWithContext = async (context: AsyncCommandContext<State>): Promise<void> => {
  const { searchValue } = context.getState()
  const value = addFilter(searchValue, ExtensionFilterParameter.MostPopular)
  await HandleInput.handleInputWithContext(context, value, InputSource.Script)
}

export const filterByMostPopular = (state: State): Promise<State> => {
  const value = addFilter(state.searchValue, ExtensionFilterParameter.MostPopular)
  return HandleInput.handleInput(state, value, InputSource.Script)
}
