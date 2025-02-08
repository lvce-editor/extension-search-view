export const logError = (error: any, prefix = ''): void => {
  console.error(error)
}

export const handleError = (error: any, notify = true, prefix = ''): void => {
  console.error(error)
}
