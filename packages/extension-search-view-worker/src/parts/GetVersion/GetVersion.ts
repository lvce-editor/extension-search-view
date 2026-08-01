export const getVersion = (extension: unknown): string => {
  if (
    extension === null ||
    typeof extension !== 'object' ||
    !('version' in extension) ||
    typeof extension.version !== 'string' ||
    !extension.version
  ) {
    return 'n/a'
  }
  return extension.version
}
