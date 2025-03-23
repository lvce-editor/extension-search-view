import * as DiffFocus from '../DiffFocus/DiffFocus.ts'
import * as DiffHeader from '../DiffHeader/DiffHeader.ts'
import * as DiffItems from '../DiffItems/DiffItems.ts'
import * as DiffMessage from '../DiffMessage/DiffMessage.ts'
import * as DiffScrollBar from '../DiffScrollBar/DiffScrollBar.ts'

export const modules = [DiffFocus.isEqual, DiffScrollBar.isEqual, DiffMessage.isEqual, DiffHeader.isEqual, DiffItems.isEqual]

export const numbers = [DiffFocus.diffType, DiffScrollBar.diffType, DiffMessage.diffType, DiffHeader.diffType, DiffItems.diffType]
