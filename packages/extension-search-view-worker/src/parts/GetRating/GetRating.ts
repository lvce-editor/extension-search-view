const getRatingValue = (extension: any): unknown => {
  return (
    extension?.rating ??
    extension?.averageRating ??
    extension?.marketplace?.rating ??
    extension?.marketplace?.averageRating ??
    extension?.packageJSON?.rating ??
    extension?.packageJSON?.averageRating
  )
}

export const getRating = (extension: unknown): string => {
  const rating = getRatingValue(extension)
  if (typeof rating !== 'number') {
    return 'n/a'
  }
  return rating.toFixed(1)
}
