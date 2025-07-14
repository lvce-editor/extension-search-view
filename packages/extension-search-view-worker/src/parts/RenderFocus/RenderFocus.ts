import type { State } from '../State/State.ts'
import * as InputName from '../InputName/InputName.ts'

export const renderFocus = (newState: State): readonly any[] => {
  const selector = `[name="${InputName.Extensions}"]`
  return ['Viewlet.focusSelector', newState.uid, selector]
}
