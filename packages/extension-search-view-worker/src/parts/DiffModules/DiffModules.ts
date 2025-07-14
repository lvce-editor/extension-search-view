import * as DiffFocus from '../DiffFocus/DiffFocus.ts'
import * as DiffHeader from '../DiffHeader/DiffHeader.ts'
import * as DiffItems from '../DiffItems/DiffItems.ts'
import * as DiffMessage from '../DiffMessage/DiffMessage.ts'
import * as DiffScrollBar from '../DiffScrollBar/DiffScrollBar.ts'
import * as DiffSearchValue from '../DiffSearchValue/DiffSearchValue.ts'
import * as DiffType from '../DiffType/DiffType.ts'

export const modules = [DiffScrollBar.isEqual, DiffMessage.isEqual, DiffHeader.isEqual, DiffItems.isEqual, DiffFocus.isEqual, DiffSearchValue.isEqual]

export const numbers = [
  DiffType.RenderScrollBar,
  DiffType.RenderMessage,
  DiffType.RenderHeader,
  DiffType.RenderItems,
  DiffType.RenderFocus,
  DiffType.RenderSearchValue,
]
