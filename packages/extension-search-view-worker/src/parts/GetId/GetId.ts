export const getId = (extension: any): string => {
  if (!extension || !extension.id) {
    return 'n/a'
  }
  return extension.id
}
