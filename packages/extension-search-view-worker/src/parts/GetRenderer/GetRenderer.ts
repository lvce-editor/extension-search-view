import type { Renderer } from '../Renderer/Renderer.ts'
import * as DiffType from '../DiffType/DiffType.ts'
import * as RenderItems from '../RenderItems/RenderItems.ts'
import * as RenderMessage from '../RenderMessage/RenderMessage.ts'
import * as RenderScrollBar from '../RenderScrollBar/RenderScrollBar.ts'
import * as RenderSearchValue from '../RenderSearchValue/RenderSearchValue.ts'

export const getRenderer = (diffType: number): Renderer => {
  switch (diffType) {
    case DiffType.RenderItems:
      return RenderItems.renderItems
    case DiffType.RenderMessage:
      return RenderMessage.renderMessage
    case DiffType.RenderScrollBar:
      return RenderScrollBar.renderScrollBar
    case DiffType.RenderMessage:
      return RenderMessage.renderMessage
    case DiffType.RenderSearchValue:
      return RenderSearchValue.renderSearchValue
    default:
      throw new Error('unknown renderer')
  }
}
