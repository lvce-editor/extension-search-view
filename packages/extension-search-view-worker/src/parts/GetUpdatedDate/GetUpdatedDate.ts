export const getUpdatedDate = (extension: unknown): number => {
  if (
    extension === null ||
    typeof extension !== 'object' ||
    !('updatedDate' in extension) ||
    !extension.updatedDate ||
    typeof extension.updatedDate !== 'number'
  ) {
    return 0
  }
  return extension.updatedDate
}
