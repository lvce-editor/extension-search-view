import * as ParseExtensionSearchValue from '../ParseExtensionSearchValue/ParseExtensionSearchValue.js'
import * as SearchExtensionsLocal from '../SearchExtensionsLocal/SearchExtensionsLocal.js'
import { VError } from '../VError/VError.js'

export const searchExtensions = async (extensions: any[], value: string): Promise<any> => {
  try {
    const parsedValue = ParseExtensionSearchValue.parseValue(value)
    const filteredExtensions = await SearchExtensionsLocal.getExtensions(extensions, parsedValue)
    return filteredExtensions
  } catch (error) {
    throw new VError(error, 'Failed to search for extensions')
  }
}
