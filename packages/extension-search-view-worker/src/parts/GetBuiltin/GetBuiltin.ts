interface Extension {
  readonly builtin?: boolean
  readonly id?: string
  readonly isBuiltin?: boolean
}

export const getBuiltin = (extension: unknown): boolean => {
  if (extension === null || typeof extension !== 'object') {
    return false
  }
  const { builtin, id, isBuiltin } = extension as Extension
  return isBuiltin === true || builtin === true || (typeof id === 'string' && id.startsWith('builtin.'))
}
