export const getUpdatedDate = (extension: any): number => {
  if (!extension || !extension.updatedDate || typeof extension.updatedDate !== 'number') {
    return 0
  }
  return extension.updatedDate
}
