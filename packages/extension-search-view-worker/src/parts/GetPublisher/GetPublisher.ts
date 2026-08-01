const RE_PUBLISHER = /^[a-z\d-]+/

export const getPublisher = (extension: unknown): string => {
  if (extension === null || typeof extension !== 'object' || !('id' in extension) || typeof extension.id !== 'string') {
    return 'n/a'
  }
  const match = extension.id.match(RE_PUBLISHER)
  if (!match) {
    return 'n/a'
  }
  return match[0]
}
