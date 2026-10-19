import { VirtualDomElements } from '@lvce-editor/virtual-dom-worker'
import type { VirtualDomNode } from '../VirtualDomNode/VirtualDomNode.ts'
import * as ClassNames from '../ClassNames/ClassNames.ts'
import * as DomEventListenerFunctions from '../DomEventListenerFunctions/DomEventListenerFunctions.ts'
import * as ExtensionStatus from '../ExtensionStatus/ExtensionStatus.ts'
import * as GetExtensionActions from '../GetExtensionActions/GetExtensionActions.ts'
import * as GetExtensionActionVirtualDom from '../GetExtensionActionVirtualDom/GetExtensionActionVirtualDom.ts'

const manageButtonProps = {
  ariaLabel: 'Extension settings',
  childCount: 0,
  className: 'ExtensionListItemActionManage',
  onClick: DomEventListenerFunctions.HandleSettingsButtonClick,
  title: 'Extension settings',
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
  if (status !== ExtensionStatus.NotInstalled && status !== ExtensionStatus.Installing && status !== ExtensionStatus.Uninstalling) {
    return [
      manageActionsContainer,
      { ...manageButtonProps, ariaLabel: `Extension settings for ${id}`, name: String(index), type: VirtualDomElements.Button },
    ]
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
