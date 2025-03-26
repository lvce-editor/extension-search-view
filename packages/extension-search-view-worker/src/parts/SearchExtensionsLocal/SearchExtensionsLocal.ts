import type { ExtensionListItem } from '../ExtensionListItem/ExtensionListItem.ts'
import type { ParsedExtensionSearchValue } from '../ParsedExtensionSearchValue/ParsedExtensionSearchValue.ts'
import * as MatchesParsedValue from '../MatchesParsedValue/MatchesParsedValue.ts'
import * as SortExtensions from '../SortExtensions/SortExtensions.ts'

export const getExtensions = async (extensions: readonly ExtensionListItem[], parsedValue: ParsedExtensionSearchValue): Promise<readonly any[]> => {
  const filteredExtensions = []
  for (const extension of extensions) {
    if (MatchesParsedValue.matchesParsedValue(extension, parsedValue)) {
      filteredExtensions.push(extension)
    }
  }
  const sortedExtensions = SortExtensions.sortExtensions(filteredExtensions)
  return sortedExtensions
}
