import type { State } from '../State/State.ts'
import * as DiffHeader from '../DiffHeader/DiffHeader.ts'
import * as DiffItems from '../DiffItems/DiffItems.ts'
import * as DiffMessage from '../DiffMessage/DiffMessage.ts'
import * as DiffScrollBar from '../DiffScrollBar/DiffScrollBar.ts'
import * as DiffSearchValue from '../DiffSearchValue/DiffSearchValue.ts'
import * as RenderHeader from '../RenderHeader/RenderHeader.ts'
import * as RenderItems from '../RenderItems/RenderItems.ts'
import * as RenderMessage from '../RenderMessage/RenderMessage.ts'
import * as RenderMethod from '../RenderMethod/RenderMethod.ts'
import * as RenderScrollBar from '../RenderScrollBar/RenderScrollBar.ts'

const renderExtensions = {
  isEqual: DiffItems.isEqual,
  apply(oldState: State, newState: State): readonly any[] {
    return RenderItems.renderItems(newState)
  },
}

const renderScrollBar = {
  isEqual: DiffScrollBar.isEqual,
  apply(oldState: State, newState: State): readonly any[] {
    return RenderScrollBar.renderScrollBar(newState)
  },
}

const renderMessage = {
  isEqual: DiffMessage.isEqual,
  apply(oldState: State, newState: State): readonly any[] {
    return RenderMessage.renderMessage(newState)
  },
}

const renderSearchValue = {
  isEqual: DiffSearchValue.isEqual,
  apply(oldState: State, newState: State): readonly any[] {
    return [/* method */ RenderMethod.SetSearchValue, oldState.searchValue, newState.searchValue]
  },
}

const renderHeader = {
  isEqual: DiffHeader.isEqual,
  apply(oldState: State, newState: State): readonly any[] {
    return RenderHeader.renderHeader(newState)
  },
}

const render = [renderScrollBar, renderMessage, renderExtensions, renderSearchValue, renderHeader]

export const doRender = (oldState: State, newState: State): readonly any[] => {
  const commands: any[] = []
  for (const item of render) {
    if (!item.isEqual(oldState, newState)) {
      commands.push(item.apply(oldState, newState))
    }
  }
  return commands
}
