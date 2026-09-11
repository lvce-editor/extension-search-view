export const getExtensionDetailUri = (extensionId: string): string => {
  return `extension-detail:///${encodeURIComponent(extensionId)}`
}
