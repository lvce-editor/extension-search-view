import * as Arrays from '../Arrays/Arrays.ts'
import * as CompareExtension from '../CompareExtension/CompareExtension.ts'

export const sortExtensions = (extensions: readonly any[]): any => {
  return Arrays.toSorted(extensions, CompareExtension.compareExtension)
}
