import { VirtualDomElements } from '@lvce-editor/virtual-dom-worker'
import type { ExtensionAction } from '../ExtensionAction/ExtensionAction.ts'
import type { VirtualDomNode } from '../VirtualDomNode/VirtualDomNode.ts'
import * as ClassNames from '../ClassNames/ClassNames.ts'
import * as GetExtensionActions from '../GetExtensionActions/GetExtensionActions.ts'
import * as MergeClassNames from '../MergeClassNames/MergeClassNames.ts'
import { text } from '../VirtualDomHelpers/VirtualDomHelpers.ts'

const className = MergeClassNames.mergeClassNames(ClassNames.ExtensionListItemActionInstall, ClassNames.ExtensionActionButton)

const getActionVirtualDom = (action: ExtensionAction, id: string): readonly VirtualDomNode[] => {
  return [
    {
      childCount: 1,
      className,
      disabled: action.disabled,
      name: id,
      onClick: action.onClick,
      type: VirtualDomElements.Button,
    },
    text(action.label),
  ]
}

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
    ...actions.flatMap((action) => getActionVirtualDom(action, id)),
  ]
}
