export const getDisabled = (extension: unknown): boolean => {
  return extension !== null && typeof extension === 'object' && 'disabled' in extension && extension.disabled === true
}
