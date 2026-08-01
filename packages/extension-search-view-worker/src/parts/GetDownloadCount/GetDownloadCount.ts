const getDownloadCountValue = (extension: unknown): unknown => {
  if (extension === null || typeof extension !== 'object') {
    return undefined
  }
  const marketplace =
    'marketplace' in extension && extension.marketplace !== null && typeof extension.marketplace === 'object' ? extension.marketplace : {}
  const packageJson =
    'packageJSON' in extension && extension.packageJSON !== null && typeof extension.packageJSON === 'object' ? extension.packageJSON : {}
  return (
    ('downloadCount' in extension ? extension.downloadCount : undefined) ??
    ('downloads' in extension ? extension.downloads : undefined) ??
    ('downloadCount' in marketplace ? marketplace.downloadCount : undefined) ??
    ('downloads' in marketplace ? marketplace.downloads : undefined) ??
    ('downloadCount' in packageJson ? packageJson.downloadCount : undefined) ??
    ('downloads' in packageJson ? packageJson.downloads : undefined)
  )
}

export const getDownloadCount = (extension: unknown): string => {
  const downloadCount = getDownloadCountValue(extension)
  if (typeof downloadCount !== 'number') {
    return 'n/a'
  }
  return downloadCount.toLocaleString()
}
