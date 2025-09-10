import type { VirtualDomNode } from '@lvce-editor/virtual-dom-worker'
import { VirtualDomElements } from '@lvce-editor/virtual-dom-worker'
import * as ClassNames from '../ClassNames/ClassNames.ts'
import * as DomEventListenerFunctions from '../DomEventListenerFunctions/DomEventListenerFunctions.ts'
import * as MergeClassNames from '../MergeClassNames/MergeClassNames.ts'
import * as Px from '../Px/Px.ts'

export const getScrollBarVirtualDom = (scrollBarHeight: number, scrollBarTop: number): readonly VirtualDomNode[] => {
  const shouldShowScrollbar = scrollBarHeight > 0
  if (!shouldShowScrollbar) {
    return []
  }
  // TODO move the dynamic css into a css adopted stylesheet
  const heightString = Px.px(scrollBarHeight)
  const translateString = Px.position(0, scrollBarTop)
  return [
    {
      type: VirtualDomElements.Div,
      className: MergeClassNames.mergeClassNames(ClassNames.ScrollBar, ClassNames.ScrollBarSmall),
      onPointerDown: DomEventListenerFunctions.HandleScrollBarPointerDown, // TODO support pointercapture event
      childCount: 1,
    },
    {
      type: VirtualDomElements.Div,
      className: ClassNames.ScrollBarThumb,
      childCount: 0,
      height: heightString,
      translate: translateString,
    },
  ]
}
