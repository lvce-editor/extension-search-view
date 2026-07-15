const getDownloadCountValue = (extension: any): unknown => {
  return (
    extension?.downloadCount ??
    extension?.downloads ??
    extension?.marketplace?.downloadCount ??
    extension?.marketplace?.downloads ??
    extension?.packageJSON?.downloadCount ??
    extension?.packageJSON?.downloads
  )
}

export const getDownloadCount = (extension: unknown): string => {
  const downloadCount = getDownloadCountValue(extension)
  if (typeof downloadCount !== 'number') {
    return 'n/a'
  }
  return downloadCount.toLocaleString()
}
