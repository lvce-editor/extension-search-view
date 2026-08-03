import type { State } from '../State/State.ts'
import * as ExtensionFilterParameter from '../ExtensionFilterParameter/ExtensionFilterParameter.ts'
import * as FilterByValue from '../FilterByValue/FilterByValue.ts'

export const filterByMostPopularWithContext = FilterByValue.createFilterCommand(ExtensionFilterParameter.MostPopular)

export const filterByMostPopular = (state: State): Promise<State> => {
  return FilterByValue.filterByValue(state, ExtensionFilterParameter.MostPopular)
}
