import type { State } from '../State/State.ts'
import * as ActionType from '../ActionType/ActionType.ts'
import * as ViewletExtensionStrings from '../ExtensionStrings/ExtensionStrings.ts'
import * as GetExtensionHeaderVirtualDom from '../GetExtensionHeaderVirtualDom/GetExtensionHeaderVirtualDom.ts'
import * as MaskIcon from '../MaskIcon/MaskIcon.ts'

export const renderHeader = (newState: State): readonly any[] => {
  const actions = [
    {
      type: ActionType.Button,
      title: ViewletExtensionStrings.clearExtensionSearchResults(),
      icon: `MaskIcon${MaskIcon.ClearAll}`,
      command: 'Extensions.clearSearchResults',
    },
    {
      type: ActionType.Button,
      title: ViewletExtensionStrings.filter(),
      icon: `MaskIcon${MaskIcon.Filter}`,
    },
  ]
  const dom = GetExtensionHeaderVirtualDom.getExtensionHeaderVirtualDom(newState.placeholder, actions)
  return ['setHeaderDom', dom]
}
