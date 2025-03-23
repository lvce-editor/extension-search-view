import * as DiffFocus from '../DiffFocus/DiffFocus.ts'
import * as DiffHeader from '../DiffHeader/DiffHeader.ts'
import * as DiffScrollBar from '../DiffScrollBar/DiffScrollBar.ts'

export const modules = [DiffFocus.isEqual, DiffScrollBar.isEqual, DiffHeader.isEqual]

export const numbers = [DiffFocus.diffType, DiffScrollBar.diffType, DiffHeader.diffType]
