import type { ExtensionListItem } from '../ExtensionListItem/ExtensionListItem.ts'
import * as ExtensionDisplay from '../ExtensionDisplay/ExtensionDisplay.ts'
import { getPublisher } from '../GetPublisher/GetPublisher.ts'

export const normalizeExtension = (extension: unknown, platform: number, assetDir: string): ExtensionListItem => {
  return {
    builtin: ExtensionDisplay.getBuiltin(extension),
    categories: ExtensionDisplay.getCategories(extension),
    description: ExtensionDisplay.getDescription(extension),
    disabled: ExtensionDisplay.getDisabled(extension),
    icon: ExtensionDisplay.getIcon(extension, platform, assetDir),
    id: ExtensionDisplay.getId(extension),
    name: ExtensionDisplay.getName(extension),
    publisher: getPublisher(extension),
    size: ExtensionDisplay.getSize(extension),
    status: ExtensionDisplay.getStatus(extension),
    updatedDate: ExtensionDisplay.getUpdatedDate(extension),
    uri: '',
  }
}
