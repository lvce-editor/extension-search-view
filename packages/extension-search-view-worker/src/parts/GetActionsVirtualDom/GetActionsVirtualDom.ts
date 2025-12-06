import { VirtualDomElements } from '@lvce-editor/virtual-dom-worker'
import type { Action } from '../Action/Action.ts'
import type { VirtualDomNode } from '../VirtualDomNode/VirtualDomNode.ts'
import * as AriaRoles from '../AriaRoles/AriaRoles.ts'
import * as ClassNames from '../ClassNames/ClassNames.ts'
import * as GetActionVirtualDom from '../GetActionVirtualDom/GetActionVirtualDom.ts'

export const getActionsVirtualDom = (actions: readonly Action[]): readonly VirtualDomNode[] => {
  return [
    {
      childCount: actions.length,
      className: ClassNames.Actions,
      role: AriaRoles.ToolBar,
      type: VirtualDomElements.Div,
    },
    ...actions.flatMap(GetActionVirtualDom.getActionVirtualDom),
  ]
}
