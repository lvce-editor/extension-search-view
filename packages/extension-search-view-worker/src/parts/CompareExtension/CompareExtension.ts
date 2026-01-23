import type { ExtensionListItem } from '../ExtensionListItem/ExtensionListItem.ts'

export const compareName = (extensionA: ExtensionListItem, extensionB: ExtensionListItem): number => {
  return extensionA.name.localeCompare(extensionB.name)
}

export const compareId = (extensionA: ExtensionListItem, extensionB: ExtensionListItem): number => {
  return extensionA.id.localeCompare(extensionB.id)
}

export const compareSize = (extensionA: ExtensionListItem, extensionB: ExtensionListItem): number => {
  // Sort by size descending (larger sizes first)
  return extensionB.size - extensionA.size
}

export const compareUpdatedDate = (extensionA: ExtensionListItem, extensionB: ExtensionListItem): number => {
  // Sort by updated date descending (newer first)
  return extensionB.updatedDate - extensionA.updatedDate
}

export const compareExtension = (extensionA: ExtensionListItem, extensionB: ExtensionListItem): number => {
  return extensionA.name.localeCompare(extensionB.name) || extensionA.id.localeCompare(extensionB.id)
}
