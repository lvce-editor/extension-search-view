import type { VirtualDomNode } from '../VirtualDomNode/VirtualDomNode.ts'
import type { VisibleItem } from '../VisibleItem/VisibleItem.ts'
import * as GetExtensionsListVirtualDom from '../GetExtensionsListVirtualDom/GetExtensionsListVirtualDom.ts'

export const getExtensionsVirtualDom = (visibleExtensions: readonly VisibleItem[], focusOutline: boolean): readonly VirtualDomNode[] => {
  const dom = GetExtensionsListVirtualDom.getExtensionsListVirtualDom(visibleExtensions, focusOutline)
  // TODO
  return dom
}
