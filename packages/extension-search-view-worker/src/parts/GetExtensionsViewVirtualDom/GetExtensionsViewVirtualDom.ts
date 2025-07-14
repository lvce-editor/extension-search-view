import { AriaRoles, text, VirtualDomElements } from '@lvce-editor/virtual-dom-worker'
import type { State } from '../State/State.ts'
import type { VirtualDomNode } from '../VirtualDomNode/VirtualDomNode.ts'
import type { VisibleItem } from '../VisibleItem/VisibleItem.ts'
import * as ClassNames from '../ClassNames/ClassNames.ts'
import { getExtensionHeaderVirtualDom } from '../GetExtensionHeaderVirtualDom/GetExtensionHeaderVirtualDom.ts'
import * as GetExtensionsVirtualDom from '../GetExtensionsVirtualDom/GetExtensionsVirtualDom.ts'
import * as GetVisibleExtensions from '../GetVisibleExtensions/GetVisibleExtensions.ts'
import * as MergeClassNames from '../MergeClassNames/MergeClassNames.ts'
import { getScrollBarVirtualDom } from '../GetScrollBarVirtualDom/GetScrollBarVirtualDom.ts'

const getContentVirtualDom = (visibleExtensions: readonly VisibleItem[], message: string, scrollBarHeight: number): readonly VirtualDomNode[] => {
  if (message) {
    return [{ type: VirtualDomElements.Div, childCount: 1 }, text(message)]
  }
  return [
    {
      type: VirtualDomElements.Div,
      className: MergeClassNames.mergeClassNames(ClassNames.Viewlet, ClassNames.List),
      childCount: 2,
    },
    ...GetExtensionsVirtualDom.getExtensionsVirtualDom(visibleExtensions),
    ...getScrollBarVirtualDom(scrollBarHeight, 0),
  ]
}

export const getExtensionsViewVirtualDom = (state: State): readonly VirtualDomNode[] => {
  const visibleExtensions = GetVisibleExtensions.getVisible(state)
  const { placeholder, inputActions, message, scrollBarHeight } = state

  return [
    {
      type: VirtualDomElements.Div,
      className: MergeClassNames.mergeClassNames(ClassNames.Viewlet, ClassNames.Extensions),
      childCount: 2,
      ariaLive: 'polite',
      ariaBusy: false,
      role: AriaRoles.None,
    },
    ...getExtensionHeaderVirtualDom(placeholder, inputActions),
    ...getContentVirtualDom(visibleExtensions, message, scrollBarHeight),
  ]
}
