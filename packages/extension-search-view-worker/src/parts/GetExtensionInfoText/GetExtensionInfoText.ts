import type { ExtensionListItem } from '../ExtensionListItem/ExtensionListItem.ts'
import * as ExtensionSearchStrings from '../ExtensionStrings/ExtensionStrings.ts'

interface Row {
  readonly key: string
  readonly value: string
}

const stringifyRow = (row: Row): string => {
  const { key, value } = row
  return `${key}: ${value}`.trim()
}

export const getExtensionInfoText = (extension: ExtensionListItem): string => {
  const { description, id, name, publisher } = extension
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
  const infoRows = rows.map(stringifyRow)
  const infoText = infoRows.join('\n')
  return infoText
}
