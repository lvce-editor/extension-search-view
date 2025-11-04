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

const matchesCategory = (extension: ExtensionListItem, category: string): boolean => {
  return (
    extension &&
    typeof extension === 'object' &&
    'categories' in extension &&
    Array.isArray(extension.categories) &&
    extension.categories.some((item) => {
      return item.toLowerCase() === category
    })
  )
}

export const matchesParsedValue = (extension: ExtensionListItem, parsedValue: ParsedExtensionSearchValue): boolean => {
  if (parsedValue.id && extension.id) {
    return parsedValue.id === extension.id
  }
  if (parsedValue.category && matchesCategory(extension, parsedValue.category)) {
    return true
  }
  if (extension.name) {
    return matchesName(extension, parsedValue.query)
  }
  if (extension.id) {
    return matchesId(extension, parsedValue.query)
  }
  return false
}
