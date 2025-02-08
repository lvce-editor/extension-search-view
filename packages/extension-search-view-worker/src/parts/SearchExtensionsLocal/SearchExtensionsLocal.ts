import * as ExtensionDisplay from '../ExtensionDisplay/ExtensionDisplay.ts'
import * as MatchesParsedValue from '../MatchesParsedValue/MatchesParsedValue.ts'
import * as SortExtensions from '../SortExtensions/SortExtensions.ts'

export const getExtensions = async (extensions: any, parsedValue: any, platform: number): Promise<readonly any[]> => {
  const filteredExtensions = []
  for (const extension of extensions) {
    if (MatchesParsedValue.matchesParsedValue(extension, parsedValue)) {
      filteredExtensions.push({
        name: ExtensionDisplay.getName(extension),
        id: ExtensionDisplay.getId(extension),
        publisher: ExtensionDisplay.getPublisher(extension),
        icon: ExtensionDisplay.getIcon(extension, platform),
        description: ExtensionDisplay.getDescription(extension),
      })
    }
  }
  const sortedExtensions = SortExtensions.sortExtensions(filteredExtensions)
  return sortedExtensions
}
