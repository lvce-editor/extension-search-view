import * as GetExtensionsListVirtualDom from '../GetExtensionsListVirtualDom/GetExtensionsListVirtualDom.ts'

export const getExtensionsVirtualDom = (visibleExtensions: any[]) => {
  const dom = GetExtensionsListVirtualDom.getExtensionsListVirtualDom(visibleExtensions)
  // TODO
  return dom
}
