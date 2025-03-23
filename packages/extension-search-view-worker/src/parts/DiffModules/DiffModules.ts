import * as DiffFocus from '../DiffFocus/DiffFocus.ts'
import * as DiffMessage from '../DiffMessage/DiffMessage.ts'
import * as DiffScrollBar from '../DiffScrollBar/DiffScrollBar.ts'

export const modules = [DiffFocus.isEqual, DiffScrollBar.isEqual, DiffMessage.isEqual]

export const numbers = [DiffFocus.diffType, DiffScrollBar.diffType, DiffMessage.diffType]
