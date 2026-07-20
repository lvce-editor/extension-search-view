import type { VirtualDomNode } from '@lvce-editor/virtual-dom-worker'
import { VirtualDomElements } from '@lvce-editor/virtual-dom-worker'
import * as ClassNames from '../ClassNames/ClassNames.ts'
import * as DomEventListenerFunctions from '../DomEventListenerFunctions/DomEventListenerFunctions.ts'
import * as MergeClassNames from '../MergeClassNames/MergeClassNames.ts'

const scrollBarThumbNode: VirtualDomNode = {
  childCount: 0,
  className: ClassNames.ScrollBarThumb,
  type: VirtualDomElements.Div,
}

export const getScrollBarVirtualDom = (scrollBarHeight: number, scrollBarTop: number): readonly VirtualDomNode[] => {
  const shouldShowScrollbar = scrollBarHeight > 0
  if (!shouldShowScrollbar) {
    return []
  }
  return [
    {
      childCount: 1,
      className: MergeClassNames.mergeClassNames(ClassNames.ScrollBar, ClassNames.ScrollBarSmall),
      onPointerDown: DomEventListenerFunctions.HandleScrollBarPointerDown, // TODO support pointercapture event
      type: VirtualDomElements.Div,
    },
    scrollBarThumbNode,
  ]
}
