import * as InputName from '../InputName/InputName.ts'
import type { State } from '../State/State.ts'

export const renderFocus = (newState: State): readonly any[] => {
  const selector = `[name="${InputName.Extensions}"]`
  return ['Viewlet.focusSelector', newState.uid, selector]
}
