import { VirtualDomElements } from '@lvce-editor/virtual-dom-worker'
import type { Action } from '../Action/Action.ts'
import type { VirtualDomNode } from '../VirtualDomNode/VirtualDomNode.ts'
import * as ClassNames from '../ClassNames/ClassNames.ts'
import * as GetIconVirtualDom from '../GetIconVirtualDom/GetIconVirtualDom.ts'

export const getActionButtonVirtualDom = (action: Action): readonly VirtualDomNode[] => {
  const { id, icon } = action
  return [
    {
      type: VirtualDomElements.Button,
      className: ClassNames.IconButton,
      title: id,
      childCount: 1,
    },
    GetIconVirtualDom.getIconVirtualDom(icon),
  ]
}
