export const getVersion = (extension: any): string => {
  if (!extension || !extension.version) {
    return 'n/a'
  }
  return extension.version
}
