export const getLinked = (extension: unknown): boolean => {
  if (extension === null || typeof extension !== 'object') {
    return false
  }
  if ('linked' in extension && extension.linked === true) {
    return true
  }
  return 'symlink' in extension && typeof extension.symlink === 'string' && extension.symlink.length > 0
}
