export const getName = (extension: unknown): string => {
  if (extension === null || typeof extension !== 'object') {
    return 'n/a'
  }
  if ('name' in extension && typeof extension.name === 'string' && extension.name) {
    return extension.name
  }
  if ('id' in extension && typeof extension.id === 'string' && extension.id) {
    return extension.id
  }
  return 'n/a'
}
