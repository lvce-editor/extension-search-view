import * as ParseExtensionSearchValue from '../ParseExtensionSearchValue/ParseExtensionSearchValue.ts'
import * as Platform from '../Platform/Platform.ts'
import * as SearchExtensionsLocal from '../SearchExtensionsLocal/SearchExtensionsLocal.ts'
import { VError } from '../VError/VError.ts'

export const searchExtensions = async (extensions: readonly any[], value: string, platform: number): Promise<any> => {
  try {
    const parsedValue = ParseExtensionSearchValue.parseValue(value)
    const filteredExtensions = await SearchExtensionsLocal.getExtensions(extensions, parsedValue, platform || Platform.platform)
    return filteredExtensions
  } catch (error) {
    throw new VError(error, 'Failed to search for extensions')
  }
}
