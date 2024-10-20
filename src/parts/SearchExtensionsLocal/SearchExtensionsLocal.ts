import * as ExtensionDisplay from '../ExtensionDisplay/ExtensionDisplay.ts'
import * as SortExtensions from '../SortExtensions/SortExtensions.ts'

const matchesParsedValue = (extension: any, parsedValue: any) => {
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

export const getExtensions = async (extensions: any, parsedValue: any) => {
  const filteredExtensions = []
  for (const extension of extensions) {
    if (matchesParsedValue(extension, parsedValue)) {
      filteredExtensions.push({
        name: ExtensionDisplay.getName(extension),
        id: ExtensionDisplay.getId(extension),
        publisher: ExtensionDisplay.getPublisher(extension),
        icon: ExtensionDisplay.getIcon(extension),
        description: ExtensionDisplay.getDescription(extension),
      })
    }
  }
  const sortedExtensions = SortExtensions.sortExtensions(filteredExtensions)
  return sortedExtensions
}
