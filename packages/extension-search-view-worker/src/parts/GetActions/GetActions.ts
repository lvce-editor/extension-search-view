import type { Action } from '../Action/Action.ts'
import * as ActionType from '../ActionType/ActionType.ts'
import * as ViewletExtensionStrings from '../ExtensionStrings/ExtensionStrings.ts'
import * as MaskIcon from '../MaskIcon/MaskIcon.ts'

export const getActions = (): readonly Action[] => {
  return [
    {
      command: '',
      icon: MaskIcon.Refresh,
      id: ViewletExtensionStrings.refresh(),
      type: ActionType.Button,
    },
    {
      command: '',
      icon: MaskIcon.Ellipsis,
      id: ViewletExtensionStrings.viewsAndMoreActions(),
      type: ActionType.Button,
    },
  ]
}
