import { VirtualDomElements } from '@lvce-editor/virtual-dom-worker'
import type { VirtualDomNode } from '../VirtualDomNode/VirtualDomNode.ts'
import * as ClassNames from '../ClassNames/ClassNames.ts'
import * as GetExtensionActions from '../GetExtensionActions/GetExtensionActions.ts'
import * as GetExtensionActionVirtualDom from '../GetExtensionActionVirtualDom/GetExtensionActionVirtualDom.ts'
import * as DomEventListenerFunctions from '../DomEventListenerFunctions/DomEventListenerFunctions.ts'

export const getExtensionActionsVirtualDom = (
  id: string,
  builtin: boolean,
  disabled: boolean,
  status: string | undefined,
  index: number,
): readonly VirtualDomNode[] => {
  if (status !== 'not-installed' && status !== 'installing' && status !== 'uninstalling') {
    const manage = {
      ariaLabel: 'Extension settings',
      childCount: 0,
      className: 'ExtensionListItemActionManage',
      name: String(index),
      onClick: DomEventListenerFunctions.HandleSettingsButtonClick,
      title: 'Extension settings',
      type: VirtualDomElements.Button,
    }
    return [{ childCount: 1, className: ClassNames.ExtensionActions, type: VirtualDomElements.Div }, manage]
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
