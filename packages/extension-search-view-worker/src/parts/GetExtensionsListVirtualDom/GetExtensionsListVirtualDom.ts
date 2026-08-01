import { mergeClassNames, VirtualDomElements } from '@lvce-editor/virtual-dom-worker'
import * as AriaRoles from '../AriaRoles/AriaRoles.ts'
import * as ClassNames from '../ClassNames/ClassNames.ts'
import * as DomEventListenerFunctions from '../DomEventListenerFunctions/DomEventListenerFunctions.ts'
import * as ExtensionStrings from '../ExtensionStrings/ExtensionStrings.ts'
import * as GetExtensionsListItemVirtualDom from '../GetExtensionsListItemVirtualDom/GetExtensionsListItemVirtualDom.ts'
import * as TabIndex from '../TabIndex/TabIndex.ts'
import type { VirtualDomNode } from '../VirtualDomNode/VirtualDomNode.ts'
import type { VisibleItem } from '../VisibleItem/VisibleItem.ts'

const getListClassName = (focusOutline: boolean): string => {
  const className = focusOutline ? mergeClassNames(ClassNames.ListItems, ClassNames.FocusOutline) : ClassNames.ListItems
  return className
}

export const getExtensionsListVirtualDom = (visibleExtensions: readonly VisibleItem[], focusOutline: boolean): readonly VirtualDomNode[] => {
  const dom: readonly VirtualDomNode[] = [
    {
      ariaLabel: ExtensionStrings.extensions(),
      childCount: visibleExtensions.length,
      className: getListClassName(focusOutline),
      onBlur: DomEventListenerFunctions.HandleBlur,
      onContextmenu: DomEventListenerFunctions.HandleContextMenu,
      onContextMenu: DomEventListenerFunctions.HandleContextMenu,
      onFocus: DomEventListenerFunctions.HandleFocus,
      onPointerDown: DomEventListenerFunctions.HandlePointerDown,
      onTouchEnd: DomEventListenerFunctions.HandleTouchEnd,
      onTouchMove: DomEventListenerFunctions.HandleTouchMove,
      onTouchStart: DomEventListenerFunctions.HandleTouchStart,
      onWheel: DomEventListenerFunctions.HandleWheel,
      role: AriaRoles.List,
      tabIndex: TabIndex.Focusable,
      type: VirtualDomElements.Div,
    },
    ...visibleExtensions.flatMap(GetExtensionsListItemVirtualDom.getExtensionListItemVirtualDom),
  ]
  return dom
}
