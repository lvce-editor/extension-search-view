const getRatingValue = (extension: unknown): unknown => {
  if (extension === null || typeof extension !== 'object') {
    return undefined
  }
  const marketplace =
    'marketplace' in extension && extension.marketplace !== null && typeof extension.marketplace === 'object' ? extension.marketplace : {}
  const packageJson =
    'packageJSON' in extension && extension.packageJSON !== null && typeof extension.packageJSON === 'object' ? extension.packageJSON : {}
  return (
    ('rating' in extension ? extension.rating : undefined) ??
    ('averageRating' in extension ? extension.averageRating : undefined) ??
    ('rating' in marketplace ? marketplace.rating : undefined) ??
    ('averageRating' in marketplace ? marketplace.averageRating : undefined) ??
    ('rating' in packageJson ? packageJson.rating : undefined) ??
    ('averageRating' in packageJson ? packageJson.averageRating : undefined)
  )
}

export const getRating = (extension: unknown): string => {
  const rating = getRatingValue(extension)
  if (typeof rating !== 'number') {
    return 'n/a'
  }
  return rating.toFixed(1)
}
