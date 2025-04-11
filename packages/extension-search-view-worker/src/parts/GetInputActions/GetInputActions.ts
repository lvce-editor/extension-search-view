import type { InputAction } from '../InputAction/InputAction.ts'
import type { State } from '../State/State.ts'
import * as ActionType from '../ActionType/ActionType.ts'
import * as ViewletExtensionStrings from '../ExtensionStrings/ExtensionStrings.ts'
import * as MaskIcon from '../MaskIcon/MaskIcon.ts'

export const getInputActions = (newState: State): readonly InputAction[] => {
  const actions: readonly InputAction[] = [
    {
      command: 'Extensions.clearSearchResults',
      icon: `MaskIcon${MaskIcon.ClearAll}`,
      title: ViewletExtensionStrings.clearExtensionSearchResults(),
      type: ActionType.Button,
    },
    {
      icon: `MaskIcon${MaskIcon.Filter}`,
      title: ViewletExtensionStrings.filter(),
      type: ActionType.Button,
      command: '',
    },
  ]
  return actions
}
