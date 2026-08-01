export const getSize = (extension: unknown): number => {
  if (extension === null || typeof extension !== 'object' || !('size' in extension) || extension.size === 0 || typeof extension.size !== 'number') {
    return 0
  }
  return extension.size
}
