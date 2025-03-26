import type { ExtensionListItem } from '../ExtensionListItem/ExtensionListItem.ts'
import * as Arrays from '../Arrays/Arrays.ts'
import * as CompareExtension from '../CompareExtension/CompareExtension.ts'

export const sortExtensions = (extensions: readonly ExtensionListItem[]): readonly ExtensionListItem[] => {
  return Arrays.toSorted(extensions, CompareExtension.compareExtension)
}
