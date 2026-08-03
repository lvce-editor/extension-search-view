import type { AsyncCommandContext } from '@lvce-editor/viewlet-registry'
import type { State } from '../State/State.ts'
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

export const filterByValueWithContext = async (context: AsyncCommandContext<State>, filter: string): Promise<void> => {
  const { searchValue } = context.getState()
  const value = addFilter(searchValue, filter)
  await HandleInput.handleInputWithContext(context, value, InputSource.Script)
}

export const createFilterCommand = (filter: string) => {
  return (context: AsyncCommandContext<State>): Promise<void> => filterByValueWithContext(context, filter)
}

export const filterByValue = (state: State, filter: string): Promise<State> => {
  const value = addFilter(state.searchValue, filter)
  return HandleInput.handleInput(state, value, InputSource.Script)
}
