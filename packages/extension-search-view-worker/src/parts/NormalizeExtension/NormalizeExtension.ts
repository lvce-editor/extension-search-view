import type { ExtensionListItem } from '../ExtensionListItem/ExtensionListItem.ts'
import * as ExtensionDisplay from '../ExtensionDisplay/ExtensionDisplay.ts'
import { getPublisher } from '../GetPublisher/GetPublisher.ts'

export const normalizeExtension = (extension: unknown, platform: number, assetDir: string): ExtensionListItem => {
  return {
    id: ExtensionDisplay.getId(extension),
    name: ExtensionDisplay.getName(extension),
    description: ExtensionDisplay.getDescription(extension),
    uri: '',
    publisher: getPublisher(extension),
    icon: ExtensionDisplay.getIcon(extension, platform, assetDir),
  }
}
