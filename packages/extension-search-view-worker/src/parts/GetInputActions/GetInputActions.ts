import type { InputAction } from '../InputAction/InputAction.ts'
import type { State } from '../State/State.ts'
import * as ActionType from '../ActionType/ActionType.ts'
import * as DomEventListenerFunctions from '../DomEventListenerFunctions/DomEventListenerFunctions.ts'
import * as ViewletExtensionStrings from '../ExtensionStrings/ExtensionStrings.ts'
import * as MaskIcon from '../MaskIcon/MaskIcon.ts'

export const getInputActions = (newState: State): readonly InputAction[] => {
  const clearEnabled = newState.searchValue.length > 0
  const actions: readonly InputAction[] = [
    {
      command: DomEventListenerFunctions.HandleClearSearchResults,
      icon: `MaskIcon${MaskIcon.ClearAll}`,
      title: ViewletExtensionStrings.clearExtensionSearchResults(),
      type: ActionType.Button,
      enabled: clearEnabled,
    },
    {
      icon: `MaskIcon${MaskIcon.Filter}`,
      title: ViewletExtensionStrings.filter(),
      type: ActionType.Button,
      command: DomEventListenerFunctions.HandleClickFilter,
      enabled: true,
    },
  ]
  return actions
}
