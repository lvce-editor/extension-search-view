export const getExtensionListItemId = (focused: boolean): string | undefined => {
  if (focused) {
    return `ExtensionActive`
  }
  return undefined
}
