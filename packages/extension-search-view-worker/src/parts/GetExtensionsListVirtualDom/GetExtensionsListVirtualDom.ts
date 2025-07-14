import type { VirtualDomNode } from '../VirtualDomNode/VirtualDomNode.ts'
import type { VisibleItem } from '../VisibleItem/VisibleItem.ts'
import * as AriaRoles from '../AriaRoles/AriaRoles.ts'
import * as ClassNames from '../ClassNames/ClassNames.ts'
import * as DomEventListenerFunctions from '../DomEventListenerFunctions/DomEventListenerFunctions.ts'
import * as ExtensionStrings from '../ExtensionStrings/ExtensionStrings.ts'
import * as GetExtensionsListItemVirtualDom from '../GetExtensionsListItemVirtualDom/GetExtensionsListItemVirtualDom.ts'
import * as VirtualDomElements from '../VirtualDomElements/VirtualDomElements.ts'

export const getExtensionsListVirtualDom = (visibleExtensions: readonly VisibleItem[]): readonly VirtualDomNode[] => {
  const dom: readonly VirtualDomNode[] = [
    {
      type: VirtualDomElements.Div,
      className: ClassNames.ListItems,
      tabIndex: 0,
      ariaLabel: ExtensionStrings.extensions(),
      role: AriaRoles.List,
      onContextmenu: DomEventListenerFunctions.HandleContextMenu,
      onPointerDown: DomEventListenerFunctions.HandlePointerDown,
      onFocus: DomEventListenerFunctions.HandleFocus,
      onScroll: DomEventListenerFunctions.HandleScroll,
      onTouchStart: DomEventListenerFunctions.HandleTouchStart,
      onTouchMove: DomEventListenerFunctions.HandleTouchMove,
      onTouchEnd: DomEventListenerFunctions.HandleTouchEnd,
      onWheel: DomEventListenerFunctions.HandleWheel,
      onContextMenu: DomEventListenerFunctions.HandleContextMenu,
      childCount: visibleExtensions.length,
    },
    ...visibleExtensions.flatMap(GetExtensionsListItemVirtualDom.getExtensionListItemVirtualDom),
  ]
  return dom
}
