import * as GetExtensionsListVirtualDom from '../GetExtensionsListVirtualDom/GetExtensionsListVirtualDom.ts'

export const getExtensionsVirtualDom = (visibleExtensions: readonly any[]): readonly any[] => {
  const dom = GetExtensionsListVirtualDom.getExtensionsListVirtualDom(visibleExtensions)
  // TODO
  return dom
}
