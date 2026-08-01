import type { ExtensionListItem } from '../ExtensionListItem/ExtensionListItem.ts'
import * as ParseExtensionSearchValue from '../ParseExtensionSearchValue/ParseExtensionSearchValue.ts'
import * as SearchExtensionsLocal from '../SearchExtensionsLocal/SearchExtensionsLocal.ts'
import { VError } from '../VError/VError.ts'

export const searchExtensions = async (
  extensions: readonly ExtensionListItem[],
  value: string,
  platform: number,
  assetDir: string,
): Promise<readonly ExtensionListItem[]> => {
  try {
    const parsedValue = ParseExtensionSearchValue.parseValue(value)
    const filteredExtensions = await SearchExtensionsLocal.getExtensions(extensions, parsedValue)
    return filteredExtensions
  } catch (error) {
    throw new VError(error, 'Failed to search for extensions')
  }
}
