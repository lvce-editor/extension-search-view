export const getId = (extension: unknown): string => {
  if (extension === null || typeof extension !== 'object' || !('id' in extension) || typeof extension.id !== 'string' || !extension.id) {
    return 'n/a'
  }
  return extension.id
}
