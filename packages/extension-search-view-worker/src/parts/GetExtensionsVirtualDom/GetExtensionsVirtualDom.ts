import type { VirtualDomNode } from '../VirtualDomNode/VirtualDomNode.ts'
import * as GetExtensionsListVirtualDom from '../GetExtensionsListVirtualDom/GetExtensionsListVirtualDom.ts'

export const getExtensionsVirtualDom = (visibleExtensions: readonly any[]): readonly VirtualDomNode[] => {
  const dom = GetExtensionsListVirtualDom.getExtensionsListVirtualDom(visibleExtensions)
  // TODO
  return dom
}
