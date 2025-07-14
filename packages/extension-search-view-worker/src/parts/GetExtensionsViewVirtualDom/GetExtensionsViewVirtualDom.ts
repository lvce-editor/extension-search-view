import { VirtualDomElements } from '@lvce-editor/virtual-dom-worker'
import { getExtensionHeaderVirtualDom } from '../GetExtensionHeaderVirtualDom/GetExtensionHeaderVirtualDom.ts'
import * as GetExtensionsVirtualDom from '../GetExtensionsVirtualDom/GetExtensionsVirtualDom.ts'
import * as GetVisibleExtensions from '../GetVisibleExtensions/GetVisibleExtensions.ts'
import { State } from '../State/State.ts'
import type { VirtualDomNode } from '../VirtualDomNode/VirtualDomNode.ts'

export const getExtensionsViewVirtualDom = (state: State): readonly VirtualDomNode[] => {
  const visibleExtensions = GetVisibleExtensions.getVisible(state)
  return [
    {
      type: VirtualDomElements.Div,
      className: 'Viewlet Extensions',
      childCount: 2,
      ariaLive: 'polite',
      ariaBusy: false,
      role: 'none',
    },
    ...getExtensionHeaderVirtualDom(state.placeholder, []),
    {
      type: VirtualDomElements.Div,
      className: 'Viewlet List',
      childCount: 2,
    },
    ...GetExtensionsVirtualDom.getExtensionsVirtualDom(visibleExtensions),
  ]
}
