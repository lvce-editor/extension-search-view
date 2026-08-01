export const getStatus = (extension: any): string | undefined => {
  return typeof extension?.status === 'string' ? extension.status : undefined
}
