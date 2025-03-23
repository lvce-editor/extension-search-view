import type { Renderer } from '../Renderer/Renderer.ts'
import * as DiffType from '../DiffType/DiffType.ts'
import * as RenderItems from '../RenderItems/RenderItems.ts'
import * as RenderMessage from '../RenderMessage/RenderMessage.ts'

export const getRenderer = (diffType: number): Renderer => {
  switch (diffType) {
    case DiffType.RenderItems:
      return RenderItems.renderItems
    case DiffType.RenderMessage:
      return RenderMessage.renderMessage
    default:
      throw new Error('unknown renderer')
  }
}
