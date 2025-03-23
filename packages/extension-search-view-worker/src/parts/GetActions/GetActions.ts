import type { Action } from '../Action/Action.ts'
import * as ActionType from '../ActionType/ActionType.ts'
import * as ViewletExtensionStrings from '../ExtensionStrings/ExtensionStrings.ts'
import * as MaskIcon from '../MaskIcon/MaskIcon.ts'

export const getActions = (): readonly Action[] => {
  return [
    {
      type: ActionType.Button,
      id: ViewletExtensionStrings.refresh(),
      icon: MaskIcon.Refresh,
      command: '',
    },
    {
      type: ActionType.Button,
      id: ViewletExtensionStrings.viewsAndMoreActions(),
      icon: MaskIcon.Ellipsis,
      command: '',
    },
  ]
}
