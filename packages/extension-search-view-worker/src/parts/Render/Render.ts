import type { State } from '../State/State.ts'
import * as ActionType from '../ActionType/ActionType.ts'
import * as ClassNames from '../ClassNames/ClassNames.ts'
import * as ViewletExtensionStrings from '../ExtensionStrings/ExtensionStrings.ts'
import * as GetExtensionHeaderVirtualDom from '../GetExtensionHeaderVirtualDom/GetExtensionHeaderVirtualDom.ts'
import * as GetExtensionsVirtualDom from '../GetExtensionsVirtualDom/GetExtensionsVirtualDom.ts'
import { getScrollBarSize } from '../GetScrollBarSize/GetScrollBarSize.ts'
import * as GetVisibleExtensions from '../GetVisibleExtensions/GetVisibleExtensions.ts'
import * as MaskIcon from '../MaskIcon/MaskIcon.ts'
import * as Px from '../Px/Px.ts'
import * as RenderMethod from '../RenderMethod/RenderMethod.ts'
import * as ScrollBarFunctions from '../ScrollBarFunctions/ScrollBarFunctions.ts'

export const getListHeight = (state: State): number => {
  const { height, headerHeight } = state
  return height - headerHeight
}

const renderExtensions = {
  isEqual(oldState: any, newState: any): boolean {
    return (
      oldState.items === newState.items &&
      oldState.minLineY === newState.minLineY &&
      oldState.maxLineY === newState.maxLineY &&
      oldState.deltaY === newState.deltaY &&
      oldState.focusedIndex === newState.focusedIndex
    )
  },
  apply(oldState: any, newState: any): any {
    // TODO render extensions incrementally when scrolling
    const visibleExtensions = GetVisibleExtensions.getVisible(newState)
    const dom = GetExtensionsVirtualDom.getExtensionsVirtualDom(visibleExtensions)
    return ['setExtensionsDom', dom]
  },
}

const renderScrollBar = {
  isEqual(oldState: any, newState: any): boolean {
    return (
      oldState.negativeMargin === newState.negativeMargin &&
      oldState.deltaY === newState.deltaY &&
      oldState.height === newState.height &&
      oldState.finalDeltaY === newState.finalDeltaY &&
      oldState.items.length === newState.items.length &&
      oldState.scrollBarActive === newState.scrollBarActive
    )
  },
  apply(oldState: any, newState: any): any {
    // @ts-ignore
    const listHeight = getListHeight(newState)
    const total = newState.items.length
    const contentHeight = total * newState.itemHeight
    const scrollBarHeight = getScrollBarSize(listHeight, contentHeight, newState.minimumSliderSize)
    const scrollBarY = ScrollBarFunctions.getScrollBarY(
      newState.deltaY,
      newState.finalDeltaY,
      newState.height - newState.headerHeight,
      scrollBarHeight,
    )
    const roundedScrollBarY = Math.round(scrollBarY)
    const heightString = Px.px(scrollBarHeight)
    const translateString = Px.position(0, roundedScrollBarY)
    let className = ClassNames.ScrollBarThumb
    if (newState.scrollBarActive) {
      className += ' ' + ClassNames.ScrollBarThumbActive
    }
    return [/* method */ RenderMethod.SetScrollBar, translateString, heightString, className]
  },
}

const renderMessage = {
  isEqual(oldState: any, newState: any): boolean {
    return oldState.message === newState.message
  },
  apply(oldState: any, newState: any): any {
    return [/* method */ RenderMethod.SetMessage, /* message */ newState.message]
  },
}

const renderSearchValue = {
  isEqual(oldState: any, newState: any): boolean {
    return oldState.searchValue === newState.searchValue
  },
  apply(oldState: any, newState: any): any {
    return [/* method */ RenderMethod.SetSearchValue, oldState.searchValue, newState.searchValue]
  },
}

const renderHeader = {
  isEqual(oldState: any, newState: any): boolean {
    return oldState.placeholder === newState.placeholder
  },
  apply(oldState: any, newState: any): any {
    const actions = [
      {
        type: ActionType.Button,
        title: ViewletExtensionStrings.clearExtensionSearchResults(),
        icon: `MaskIcon${MaskIcon.ClearAll}`,
        command: 'Extensions.clearSearchResults',
      },
      {
        type: ActionType.Button,
        title: ViewletExtensionStrings.filter(),
        icon: `MaskIcon${MaskIcon.Filter}`,
      },
    ]
    const dom = GetExtensionHeaderVirtualDom.getExtensionHeaderVirtualDom(newState.placeholder, actions)
    return ['setHeaderDom', dom]
  },
}

const render = [renderScrollBar, renderMessage, renderExtensions, renderSearchValue, renderHeader]

export const doRender = (oldState: any, newState: any): any => {
  const commands: any = []
  for (const item of render) {
    if (!item.isEqual(oldState, newState)) {
      commands.push(item.apply(oldState, newState))
    }
  }
  return commands
}
