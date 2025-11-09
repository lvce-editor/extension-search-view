import type { InputAction } from '../InputAction/InputAction.ts'
import * as ActionType from '../ActionType/ActionType.ts'
import * as DomEventListenerFunctions from '../DomEventListenerFunctions/DomEventListenerFunctions.ts'
import * as ViewletExtensionStrings from '../ExtensionStrings/ExtensionStrings.ts'
import * as MaskIcon from '../MaskIcon/MaskIcon.ts'

export const getInputActions = (hasValue: boolean): readonly InputAction[] => {
  const clearEnabled = hasValue
  const actions: readonly InputAction[] = [
    {
      onClick: DomEventListenerFunctions.HandleClearSearchResults,
      icon: `MaskIcon${MaskIcon.ClearAll}`,
      title: ViewletExtensionStrings.clearExtensionSearchResults(),
      type: ActionType.Button,
      enabled: clearEnabled,
    },
    {
      icon: `MaskIcon${MaskIcon.Filter}`,
      title: ViewletExtensionStrings.filter(),
      type: ActionType.Button,
      onClick: DomEventListenerFunctions.HandleClickFilter,
      enabled: true,
    },
  ]
  return actions
}
