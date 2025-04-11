import type { InputAction } from '../InputAction/InputAction.ts'
import type { State } from '../State/State.ts'
import * as ActionType from '../ActionType/ActionType.ts'
import * as ViewletExtensionStrings from '../ExtensionStrings/ExtensionStrings.ts'
import * as MaskIcon from '../MaskIcon/MaskIcon.ts'
import * as DomEventListenerFunctions from '../DomEventListenerFunctions/DomEventListenerFunctions.ts'

export const getInputActions = (newState: State): readonly InputAction[] => {
  const actions: readonly InputAction[] = [
    {
      command: DomEventListenerFunctions.HandleClearSearchResults,
      icon: `MaskIcon${MaskIcon.ClearAll}`,
      title: ViewletExtensionStrings.clearExtensionSearchResults(),
      type: ActionType.Button,
    },
    {
      icon: `MaskIcon${MaskIcon.Filter}`,
      title: ViewletExtensionStrings.filter(),
      type: ActionType.Button,
      command: DomEventListenerFunctions.HandleClickFilter,
    },
  ]
  return actions
}
