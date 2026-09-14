export const getStatus = (extension: unknown): string => {
  if (extension === null || typeof extension !== 'object' || !('status' in extension)) {
    return ''
  }
  return typeof extension.status === 'string' ? extension.status : ''
}
