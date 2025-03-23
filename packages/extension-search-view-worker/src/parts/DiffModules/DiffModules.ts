import * as DiffFocus from '../DiffFocus/DiffFocus.ts'
import * as DiffHeader from '../DiffHeader/DiffHeader.ts'
import * as DiffScrollBar from '../DiffScrollBar/DiffScrollBar.ts'
import * as DiffMessage from '../DiffMessage/DiffMessage.ts'

export const modules = [DiffFocus.isEqual, DiffScrollBar.isEqual, DiffMessage.isEqual, DiffHeader.isEqual]

export const numbers = [DiffFocus.diffType, DiffScrollBar.diffType, DiffMessage.diffType, DiffHeader.diffType]
