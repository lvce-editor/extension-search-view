export const getSize = (extension: any): number => {
  if (!extension || extension.size === 0 || typeof extension.size !== 'number') {
    return 0
  }
  return extension.size
}
