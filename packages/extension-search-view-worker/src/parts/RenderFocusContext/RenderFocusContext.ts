import type { State } from '../State/State.ts'
import * as FocusId from '../FocusId/FocusId.ts'
import * as WhenExpression from '../WhenExpression/WhenExpression.ts'

export const renderFocusContext = (newState: State): readonly any[] => {
  const { uid } = newState
  if (newState.focus === FocusId.Input) {
    return ['Viewlet.setFocusContext', uid, WhenExpression.FocusExtensionsInput]
  }
  if (newState.focus === FocusId.List) {
    return ['Viewlet.setFocusContext', uid, WhenExpression.FocusExtensions]
  }
  return []
}
