import type { InputAction } from '../InputAction/InputAction.ts'
import * as ActionType from '../ActionType/ActionType.ts'
import * as DomEventListenerFunctions from '../DomEventListenerFunctions/DomEventListenerFunctions.ts'
import * as ViewletExtensionStrings from '../ExtensionStrings/ExtensionStrings.ts'
import * as MaskIcon from '../MaskIcon/MaskIcon.ts'

export const getInputActions = (hasValue: boolean): readonly InputAction[] => {
  const clearEnabled = hasValue
  const actions: readonly InputAction[] = [
    {
      enabled: clearEnabled,
      icon: `MaskIcon${MaskIcon.ClearAll}`,
      onClick: DomEventListenerFunctions.HandleClearSearchResults,
      title: ViewletExtensionStrings.clearExtensionSearchResults(),
      type: ActionType.Button,
    },
    {
      enabled: true,
      icon: `MaskIcon${MaskIcon.Filter}`,
      onClick: DomEventListenerFunctions.HandleClickFilter,
      title: ViewletExtensionStrings.filter(),
      type: ActionType.Button,
    },
  ]
  return actions
}
