import type { ExtensionListItem } from '../ExtensionListItem/ExtensionListItem.ts'

export const compareExtension = (extensionA: ExtensionListItem, extensionB: ExtensionListItem): number => {
  return extensionA.name.localeCompare(extensionB.name) || extensionA.id.localeCompare(extensionB.id)
}
