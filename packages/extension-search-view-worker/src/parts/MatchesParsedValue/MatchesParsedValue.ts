import type { ExtensionListItem } from '../ExtensionListItem/ExtensionListItem.ts'
import type { ParsedExtensionSearchValue } from '../ParsedExtensionSearchValue/ParsedExtensionSearchValue.ts'

const matchesName = (extension: ExtensionListItem, query: string): boolean => {
  const extensionNameLower = extension.name.toLowerCase()
  return extensionNameLower.includes(query)
}

const matchesId = (extension: ExtensionListItem, query: string): boolean => {
  const extensionIdLower = extension.id.toLowerCase()
  return extensionIdLower.includes(query)
}

export const matchesParsedValue = (extension: ExtensionListItem, parsedValue: ParsedExtensionSearchValue): boolean => {
  if (extension.name) {
    return matchesName(extension, parsedValue.query)
  }
  if (extension.id) {
    return matchesId(extension, parsedValue.query)
  }
  return false
}
