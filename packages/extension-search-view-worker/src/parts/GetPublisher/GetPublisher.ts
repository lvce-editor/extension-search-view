const RE_PUBLISHER = /^[a-z\d-]+/

// TODO handle case when extension is of type number|array|null|string
export const getPublisher = (extension: any): string => {
  if (!extension || !extension.id) {
    return 'n/a'
  }
  // TODO handle case when id is not of type string -> should not crash application
  const match = extension.id.match(RE_PUBLISHER)
  if (!match) {
    return 'n/a'
  }
  return match[0]
}
