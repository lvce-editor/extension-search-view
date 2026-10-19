import { VirtualDomElements } from '@lvce-editor/virtual-dom-worker'
import type { VirtualDomNode } from '../VirtualDomNode/VirtualDomNode.ts'
import * as ClassNames from '../ClassNames/ClassNames.ts'
import * as DomEventListenerFunctions from '../DomEventListenerFunctions/DomEventListenerFunctions.ts'
import * as GetExtensionActions from '../GetExtensionActions/GetExtensionActions.ts'
import * as GetExtensionActionVirtualDom from '../GetExtensionActionVirtualDom/GetExtensionActionVirtualDom.ts'

const manageButton: Omit<VirtualDomNode, 'name'> = {
  ariaLabel: 'Extension settings',
  childCount: 0,
  className: 'ExtensionListItemActionManage',
  onClick: DomEventListenerFunctions.HandleSettingsButtonClick,
  title: 'Extension settings',
  type: VirtualDomElements.Button,
}

const manageActionsContainer: VirtualDomNode = {
  childCount: 1,
  className: ClassNames.ExtensionActions,
  type: VirtualDomElements.Div,
}

export const getExtensionActionsVirtualDom = (
  id: string,
  builtin: boolean,
  disabled: boolean,
  status: string | undefined,
  index: number,
): readonly VirtualDomNode[] => {
  if (status !== 'not-installed' && status !== 'installing' && status !== 'uninstalling') {
    return [manageActionsContainer, { ...manageButton, name: String(index) }]
  }
  const actions = GetExtensionActions.getExtensionActions(builtin, disabled, status)
  return [
    {
      childCount: actions.length,
      className: ClassNames.ExtensionActions,
      type: VirtualDomElements.Div,
    },
    ...actions.flatMap((action) => GetExtensionActionVirtualDom.getExtensionActionVirtualDom(action, id)),
  ]
}
