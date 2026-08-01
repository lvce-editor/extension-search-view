export const getBuiltin = (extension: unknown): boolean => {
  return extension !== null && typeof extension === 'object' && 'builtin' in extension && extension.builtin === true
}
