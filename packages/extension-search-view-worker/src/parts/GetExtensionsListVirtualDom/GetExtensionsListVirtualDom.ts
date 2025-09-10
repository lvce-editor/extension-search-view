import { VirtualDomElements } from '@lvce-editor/virtual-dom-worker'
import type { VirtualDomNode } from '../VirtualDomNode/VirtualDomNode.ts'
import type { VisibleItem } from '../VisibleItem/VisibleItem.ts'
import * as AriaRoles from '../AriaRoles/AriaRoles.ts'
import * as ClassNames from '../ClassNames/ClassNames.ts'
import * as DomEventListenerFunctions from '../DomEventListenerFunctions/DomEventListenerFunctions.ts'
import * as ExtensionStrings from '../ExtensionStrings/ExtensionStrings.ts'
import * as GetExtensionsListItemVirtualDom from '../GetExtensionsListItemVirtualDom/GetExtensionsListItemVirtualDom.ts'

export const getExtensionsListVirtualDom = (visibleExtensions: readonly VisibleItem[]): readonly VirtualDomNode[] => {
  const dom: readonly VirtualDomNode[] = [
    {
      type: VirtualDomElements.Div,
      className: ClassNames.ListItems,
      tabIndex: 0,
      ariaLabel: ExtensionStrings.extensions(),
      role: AriaRoles.List,
      onContextmenu: DomEventListenerFunctions.HandleContextMenu,
      onContextMenu: DomEventListenerFunctions.HandleContextMenu,
      onFocus: DomEventListenerFunctions.HandleFocus,
      onPointerDown: DomEventListenerFunctions.HandlePointerDown,
      onTouchEnd: DomEventListenerFunctions.HandleTouchEnd,
      onTouchMove: DomEventListenerFunctions.HandleTouchMove,
      onTouchStart: DomEventListenerFunctions.HandleTouchStart,
      onWheel: DomEventListenerFunctions.HandleWheel,
      childCount: visibleExtensions.length,
    },
    ...visibleExtensions.flatMap(GetExtensionsListItemVirtualDom.getExtensionListItemVirtualDom),
  ]
  return dom
}
