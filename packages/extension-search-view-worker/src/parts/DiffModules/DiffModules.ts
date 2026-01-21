import * as DiffCss from '../DiffCss/DiffCss.ts'
import * as DiffFocus from '../DiffFocus/DiffFocus.ts'
import * as DiffItems from '../DiffItems/DiffItems.ts'
import * as DiffSearchValue from '../DiffSearchValue/DiffSearchValue.ts'
import * as DiffType from '../DiffType/DiffType.ts'

export const modules = [DiffItems.isEqual, DiffFocus.isEqual, DiffSearchValue.isEqual, DiffFocus.isEqual, DiffCss.isEqual]

export const numbers = [DiffType.RenderIncremental, DiffType.RenderFocus, DiffType.RenderSearchValue, DiffType.RenderFocusContext, DiffType.RenderCss]
