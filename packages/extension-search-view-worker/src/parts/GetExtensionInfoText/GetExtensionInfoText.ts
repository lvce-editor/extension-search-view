import type { ExtensionListItem } from '../ExtensionListItem/ExtensionListItem.ts'
import * as ExtensionSearchStrings from '../ExtensionStrings/ExtensionStrings.ts'

interface Row {
  readonly key: string
  readonly value: string
}

export const getExtensionInfoText = (extension: ExtensionListItem): string => {
  const { name, id, publisher, description } = extension
  const version = '' // TODO
  const marketplaceLink = '' // TODO
  const rows: readonly Row[] = [
    {
      key: ExtensionSearchStrings.name(),
      value: name,
    },
    {
      key: ExtensionSearchStrings.id(),
      value: id,
    },
    {
      key: ExtensionSearchStrings.description(),
      value: description,
    },
    {
      key: ExtensionSearchStrings.version(),
      value: version,
    },
    {
      key: ExtensionSearchStrings.publisher(),
      value: publisher,
    },
    {
      key: ExtensionSearchStrings.marketplaceLink(),
      value: marketplaceLink,
    },
  ]
  const infoRows = rows.map(({ key, value }) => `${key}: ${value}`)
  const infoText = infoRows.join('\n')
  return infoText
}
