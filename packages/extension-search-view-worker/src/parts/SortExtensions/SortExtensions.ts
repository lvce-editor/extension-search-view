import type { ExtensionListItem } from '../ExtensionListItem/ExtensionListItem.ts'
import * as CompareExtension from '../CompareExtension/CompareExtension.ts'

export const sortExtensions = (extensions: readonly ExtensionListItem[]): readonly ExtensionListItem[] => {
  return extensions.toSorted(CompareExtension.compareExtension)
}
