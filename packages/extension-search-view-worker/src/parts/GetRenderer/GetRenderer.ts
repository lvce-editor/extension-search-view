import type { Renderer } from '../Renderer/Renderer.ts'
import * as DiffType from '../DiffType/DiffType.ts'
import { renderFocus } from '../RenderFocus/RenderFocus.ts'
import { renderFocusContext } from '../RenderFocusContext/RenderFocusContext.ts'
import * as RenderHeader from '../RenderHeader/RenderHeader.ts'
import { renderIncremental } from '../RenderIncremental/RenderIncremental.ts'
import { renderItems2 } from '../RenderItems2/RenderItems2.ts'
import * as RenderMessage from '../RenderMessage/RenderMessage.ts'
import * as RenderScrollBar from '../RenderScrollBar/RenderScrollBar.ts'
import * as RenderSearchValue from '../RenderSearchValue/RenderSearchValue.ts'

export const getRenderer = (diffType: number): Renderer => {
  switch (diffType) {
    case DiffType.RenderFocus:
      return renderFocus
    case DiffType.RenderFocusContext:
      return renderFocusContext
    case DiffType.RenderHeader:
      return RenderHeader.renderHeader
    case DiffType.RenderIncremental:
      return renderIncremental
    case DiffType.RenderItems:
      return renderItems2
    case DiffType.RenderMessage:
      return RenderMessage.renderMessage
    case DiffType.RenderScrollBar:
      return RenderScrollBar.renderScrollBar
    case DiffType.RenderSearchValue:
      return RenderSearchValue.renderSearchValue
    default:
      throw new Error('unknown renderer')
  }
}
