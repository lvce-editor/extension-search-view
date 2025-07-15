import type { State } from '../State/State.ts'
import * as FocusId from '../FocusId/FocusId.ts'
import * as InputName from '../InputName/InputName.ts'

const getSelector = (focus: number): string => {
  switch (focus) {
    case FocusId.Input:
      return `[name="${InputName.Extensions}"]`
    case FocusId.List:
      return '.ListItems'
    default:
      return ''
  }
}

export const renderFocus = (newState: State): readonly any[] => {
  const { uid, focus } = newState
  if (!focus) {
    return []
  }
  const selector = getSelector(focus)
  return ['Viewlet.focusSelector', uid, selector]
}
