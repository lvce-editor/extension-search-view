import type { ExtensionListItem } from '../ExtensionListItem/ExtensionListItem.ts'

export const compareName = (extensionA: ExtensionListItem, extensionB: ExtensionListItem): number => {
  return extensionA.name.localeCompare(extensionB.name)
}

export const compareId = (extensionA: ExtensionListItem, extensionB: ExtensionListItem): number => {
  return extensionA.id.localeCompare(extensionB.id)
}

export const compareExtension = (extensionA: ExtensionListItem, extensionB: ExtensionListItem): number => {
  return extensionA.name.localeCompare(extensionB.name) || extensionA.id.localeCompare(extensionB.id)
}
