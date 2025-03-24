import type { State } from '../State/State.ts'
import * as SetFocus from '../SetFocus/SetFocus.ts'
import * as WhenExpression from '../WhenExpression/WhenExpression.ts'

export const handleFocus = async (state: State): Promise<State> => {
  await SetFocus.setFocus(WhenExpression.FocusExtensions)
  return state
}
