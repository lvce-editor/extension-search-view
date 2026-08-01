import type { ExtensionListItem } from '../ExtensionListItem/ExtensionListItem.ts'
import { getBuiltin } from '../GetBuiltin/GetBuiltin.ts'
import { getCategories } from '../GetCategories/GetCategories.ts'
import { getDescription } from '../GetDescription/GetDescription.ts'
import { getDisabled } from '../GetDisabled/GetDisabled.ts'
import { getDownloadCount } from '../GetDownloadCount/GetDownloadCount.ts'
import { getIcon } from '../GetIcon/GetIcon.ts'
import { getId } from '../GetId/GetId.ts'
import { getName } from '../GetName/GetName.ts'
import { getPublisher } from '../GetPublisher/GetPublisher.ts'
import { getRating } from '../GetRating/GetRating.ts'
import { getSize } from '../GetSize/GetSize.ts'
import { getStatus } from '../GetStatus/GetStatus.ts'
import { getUpdatedDate } from '../GetUpdatedDate/GetUpdatedDate.ts'

export const normalizeExtension = (extension: unknown, platform: number, assetDir: string): ExtensionListItem => {
  return {
    builtin: getBuiltin(extension),
    categories: getCategories(extension),
    description: getDescription(extension),
    disabled: getDisabled(extension),
    downloadCount: getDownloadCount(extension),
    icon: getIcon(extension, platform, assetDir),
    id: getId(extension),
    name: getName(extension),
    publisher: getPublisher(extension),
    rating: getRating(extension),
    size: getSize(extension),
    status: getStatus(extension),
    updatedDate: getUpdatedDate(extension),
    uri: '',
  }
}
