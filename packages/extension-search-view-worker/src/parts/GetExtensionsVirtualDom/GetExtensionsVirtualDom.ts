import type { VirtualDomNode } from '../VirtualDomNode/VirtualDomNode.ts'
import type { VisibleItem } from '../VisibleItem/VisibleItem.ts'
import * as GetExtensionsListVirtualDom from '../GetExtensionsListVirtualDom/GetExtensionsListVirtualDom.ts'

export const getExtensionsVirtualDom = (visibleExtensions: readonly VisibleItem[]): readonly VirtualDomNode[] => {
  const dom = GetExtensionsListVirtualDom.getExtensionsListVirtualDom(visibleExtensions)
  // TODO
  return dom
}
