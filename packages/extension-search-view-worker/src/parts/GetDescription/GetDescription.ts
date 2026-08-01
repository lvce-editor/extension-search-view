export const getDescription = (extension: unknown): string => {
  if (
    extension === null ||
    typeof extension !== 'object' ||
    !('description' in extension) ||
    typeof extension.description !== 'string' ||
    !extension.description
  ) {
    return 'n/a'
  }
  return extension.description
}
