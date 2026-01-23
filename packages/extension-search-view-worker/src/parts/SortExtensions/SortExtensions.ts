import type { ExtensionListItem } from '../ExtensionListItem/ExtensionListItem.ts'
import type { ParsedExtensionSearchValue } from '../ParsedExtensionSearchValue/ParsedExtensionSearchValue.ts'
import * as CompareExtension from '../CompareExtension/CompareExtension.ts'

const getCompareFn = (sort: string): ((a: ExtensionListItem, b: ExtensionListItem) => number) => {
  if (sort === 'size') {
    return CompareExtension.compareSize
  }
  if (sort === 'updatedDate') {
    return CompareExtension.compareUpdatedDate
  }
  // Default to comparing by name and id
  return CompareExtension.compareExtension
}

export const sortExtensions = (extensions: readonly ExtensionListItem[], parsedValue?: ParsedExtensionSearchValue): readonly ExtensionListItem[] => {
  const compareFn = getCompareFn(parsedValue?.sort || '')
  return extensions.toSorted(compareFn)
}
