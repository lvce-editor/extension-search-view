import type { ExtensionListItem } from '../ExtensionListItem/ExtensionListItem.ts'
import type { ParsedExtensionSearchValue } from '../ParsedExtensionSearchValue/ParsedExtensionSearchValue.ts'

export const matchesParsedValue = (extension: ExtensionListItem, parsedValue: ParsedExtensionSearchValue): boolean => {
  if (extension && typeof extension.name === 'string') {
    const extensionNameLower = extension.name.toLowerCase()
    return extensionNameLower.includes(parsedValue.query)
  }
  if (extension && typeof extension.id === 'string') {
    const extensionIdLower = extension.id.toLowerCase()
    return extensionIdLower.includes(parsedValue.query)
  }
  return false
}
