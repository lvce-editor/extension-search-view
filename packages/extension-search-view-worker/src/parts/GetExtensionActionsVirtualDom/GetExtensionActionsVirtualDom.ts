import { VirtualDomElements } from '@lvce-editor/virtual-dom-worker'
import type { VirtualDomNode } from '../VirtualDomNode/VirtualDomNode.ts'
import * as ClassNames from '../ClassNames/ClassNames.ts'
import * as GetExtensionActions from '../GetExtensionActions/GetExtensionActions.ts'
import * as GetExtensionActionVirtualDom from '../GetExtensionActionVirtualDom/GetExtensionActionVirtualDom.ts'

export const getExtensionActionsVirtualDom = (
  id: string,
  builtin: boolean,
  disabled: boolean,
  status: string | undefined,
): readonly VirtualDomNode[] => {
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
