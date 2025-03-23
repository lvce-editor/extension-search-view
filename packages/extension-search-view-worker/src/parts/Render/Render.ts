import * as ActionType from '../ActionType/ActionType.ts'
import * as ClassNames from '../ClassNames/ClassNames.ts'
import * as DiffHeader from '../DiffHeader/DiffHeader.ts'
import * as DiffItems from '../DiffItems/DiffItems.ts'
import * as DiffMessage from '../DiffMessage/DiffMessage.ts'
import * as DiffScrollBar from '../DiffScrollBar/DiffScrollBar.ts'
import * as ViewletExtensionStrings from '../ExtensionStrings/ExtensionStrings.ts'
import * as GetExtensionHeaderVirtualDom from '../GetExtensionHeaderVirtualDom/GetExtensionHeaderVirtualDom.ts'
import { getScrollBarSize } from '../GetScrollBarSize/GetScrollBarSize.ts'
import * as MaskIcon from '../MaskIcon/MaskIcon.ts'
import * as Px from '../Px/Px.ts'
import * as RenderItems from '../RenderItems/RenderItems.ts'
import * as RenderMethod from '../RenderMethod/RenderMethod.ts'
import * as ScrollBarFunctions from '../ScrollBarFunctions/ScrollBarFunctions.ts'
import type { State } from '../State/State.ts'

const getListHeight = (state: State): number => {
  const { height, headerHeight } = state
  return height - headerHeight
}

const renderExtensions = {
  isEqual: DiffItems.isEqual,
  apply(oldState: State, newState: State): readonly any[] {
    return RenderItems.renderItems(newState)
  },
}

const renderScrollBar = {
  isEqual: DiffScrollBar.isEqual,
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
  isEqual: DiffMessage.isEqual,
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
  isEqual: DiffHeader.isEqual,
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
