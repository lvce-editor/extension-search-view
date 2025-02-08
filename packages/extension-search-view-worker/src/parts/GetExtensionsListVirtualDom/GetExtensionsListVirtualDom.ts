import * as AriaRoles from '../AriaRoles/AriaRoles.ts'
import * as ClassNames from '../ClassNames/ClassNames.ts'
import * as DomEventListenerFunctions from '../DomEventListenerFunctions/DomEventListenerFunctions.ts'
import * as ExtensionStrings from '../ExtensionStrings/ExtensionStrings.ts'
import * as GetExtensionsListItemVirtualDom from '../GetExtensionsListItemVirtualDom/GetExtensionsListItemVirtualDom.ts'
import * as VirtualDomElements from '../VirtualDomElements/VirtualDomElements.ts'

export const getExtensionsListVirtualDom = (visibleExtensions: readonly any[]): readonly any[] => {
  const dom = [
    {
      type: VirtualDomElements.Div,
      className: ClassNames.ListItems,
      tabIndex: 0,
      ariaLabel: ExtensionStrings.extensions(),
      role: AriaRoles.List,
      oncontextmenu: DomEventListenerFunctions.HandleContextMenu,
      onpointerdown: DomEventListenerFunctions.HandlePointerDown,
      ontouchstart: DomEventListenerFunctions.HandleTouchStart,
      onwheelpassive: DomEventListenerFunctions.HandleWheel,
      childCount: visibleExtensions.length,
    },
    ...visibleExtensions.flatMap(GetExtensionsListItemVirtualDom.getExtensionListItemVirtualDom),
  ]
  return dom
}
