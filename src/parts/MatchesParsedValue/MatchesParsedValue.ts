export const matchesParsedValue = (extension: any, parsedValue: any) => {
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
