import type { ExtensionListItem } from '../ExtensionListItem/ExtensionListItem.ts'
import type { ParsedExtensionSearchValue } from '../ParsedExtensionSearchValue/ParsedExtensionSearchValue.ts'
import * as ExtensionDisplay from '../ExtensionDisplay/ExtensionDisplay.ts'
import { getPublisher } from '../GetPublisher/GetPublisher.ts'
import * as MatchesParsedValue from '../MatchesParsedValue/MatchesParsedValue.ts'
import * as SortExtensions from '../SortExtensions/SortExtensions.ts'

export const getExtensions = async (
  extensions: readonly ExtensionListItem[],
  parsedValue: ParsedExtensionSearchValue,
  platform: number,
  assetDir: string,
): Promise<readonly any[]> => {
  const filteredExtensions = []
  for (const extension of extensions) {
    if (MatchesParsedValue.matchesParsedValue(extension, parsedValue)) {
      filteredExtensions.push({
        name: ExtensionDisplay.getName(extension),
        id: ExtensionDisplay.getId(extension),
        publisher: getPublisher(extension),
        icon: ExtensionDisplay.getIcon(extension, platform, assetDir),
        description: ExtensionDisplay.getDescription(extension),
      })
    }
  }
  const sortedExtensions = SortExtensions.sortExtensions(filteredExtensions)
  return sortedExtensions
}
