export const compareExtension = (extensionA: any, extensionB: any): number => {
  return extensionA.name.localeCompare(extensionB.name) || extensionA.id.localeCompare(extensionB.id)
}
