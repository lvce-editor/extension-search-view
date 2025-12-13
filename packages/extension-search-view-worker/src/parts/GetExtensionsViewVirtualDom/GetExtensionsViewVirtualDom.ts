import { AriaRoles, VirtualDomElements } from '@lvce-editor/virtual-dom-worker'
import type { State } from '../State/State.ts'
import type { VirtualDomNode } from '../VirtualDomNode/VirtualDomNode.ts'
import type { VisibleItem } from '../VisibleItem/VisibleItem.ts'
import * as ClassNames from '../ClassNames/ClassNames.ts'
import { getExtensionHeaderVirtualDom } from '../GetExtensionHeaderVirtualDom/GetExtensionHeaderVirtualDom.ts'
import * as GetExtensionsVirtualDom from '../GetExtensionsVirtualDom/GetExtensionsVirtualDom.ts'
import { getNoExtensionsFoundVirtualDom } from '../GetNoExtensionsFoundVirtualDom/GetNoExtensionsFoundVirtualDom.ts'
import { getScrollBarVirtualDom } from '../GetScrollBarVirtualDom/GetScrollBarVirtualDom.ts'
import * as GetVisibleExtensions from '../GetVisibleExtensions/GetVisibleExtensions.ts'
import * as MergeClassNames from '../MergeClassNames/MergeClassNames.ts'

const getContentVirtualDom = (
  visibleExtensions: readonly VisibleItem[],
  message: string,
  scrollBarHeight: number,
  scrollBarY: number,
  focusOutline: boolean,
): readonly VirtualDomNode[] => {
  if (message) {
    return getNoExtensionsFoundVirtualDom(message)
  }
  return [
    {
      childCount: 2,
      className: MergeClassNames.mergeClassNames(ClassNames.Viewlet, ClassNames.List),
      type: VirtualDomElements.Div,
    },
    ...GetExtensionsVirtualDom.getExtensionsVirtualDom(visibleExtensions, focusOutline),
    ...getScrollBarVirtualDom(scrollBarHeight, scrollBarY),
  ]
}

export const getExtensionsViewVirtualDom = (state: State): readonly VirtualDomNode[] => {
  const visibleExtensions = GetVisibleExtensions.getVisible(state)
  const { focusedIndex, inputActions, message, placeholder, scrollBarHeight, scrollBarY } = state

  const focusOutline = focusedIndex === -1

  return [
    {
      ariaBusy: false,
      ariaLive: 'polite',
      childCount: 2,
      className: MergeClassNames.mergeClassNames(ClassNames.Viewlet, ClassNames.Extensions),
      role: AriaRoles.None,
      type: VirtualDomElements.Div,
    },
    ...getExtensionHeaderVirtualDom(placeholder, inputActions),
    ...getContentVirtualDom(visibleExtensions, message, scrollBarHeight, scrollBarY, focusOutline),
  ]
}
