import type { State } from '../State/State.ts'
import * as ClassNames from '../ClassNames/ClassNames.ts'
import * as GetListHeight from '../GetListHeight/GetListHeight.ts'
import * as GetScrollBarSize from '../GetScrollBarSize/GetScrollBarSize.ts'
import * as Px from '../Px/Px.ts'
import * as RenderMethod from '../RenderMethod/RenderMethod.ts'
import * as ScrollBarFunctions from '../ScrollBarFunctions/ScrollBarFunctions.ts'

export const renderScrollBar = (newState: State): readonly any[] => {
  const listHeight = GetListHeight.getListHeight(newState.items.length, newState.itemHeight, newState.height)
  const total = newState.items.length
  const contentHeight = total * newState.itemHeight
  const scrollBarHeight = GetScrollBarSize.getScrollBarSize(listHeight, contentHeight, newState.minimumSliderSize)
  const scrollBarY = ScrollBarFunctions.getScrollBarY(newState.deltaY, newState.finalDeltaY, newState.height - newState.headerHeight, scrollBarHeight)
  const roundedScrollBarY = Math.round(scrollBarY)
  const heightString = Px.px(scrollBarHeight)
  const translateString = Px.position(0, roundedScrollBarY)
  let className = ClassNames.ScrollBarThumb
  if (newState.scrollBarActive) {
    className += ' ' + ClassNames.ScrollBarThumbActive
  }
  return [/* method */ RenderMethod.SetScrollBar, translateString, heightString, className]
}
