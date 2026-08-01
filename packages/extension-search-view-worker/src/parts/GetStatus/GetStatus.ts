export const getStatus = (extension: unknown): string | undefined => {
  if (extension === null || typeof extension !== 'object' || !('status' in extension)) {
    return undefined
  }
  return typeof extension.status === 'string' ? extension.status : undefined
}
