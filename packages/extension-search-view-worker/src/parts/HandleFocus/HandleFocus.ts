import * as SetFocus from '../SetFocus/SetFocus.ts'
import * as WhenExpression from '../WhenExpression/WhenExpression.ts'

export const handleFocus = async (): Promise<void> => {
  await SetFocus.setFocus(WhenExpression.FocusExtensions)
}
