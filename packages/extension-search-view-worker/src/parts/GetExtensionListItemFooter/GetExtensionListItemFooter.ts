import { VirtualDomElements } from '@lvce-editor/virtual-dom-worker'
import type { VirtualDomNode } from '../VirtualDomNode/VirtualDomNode.ts'
import * as ClassNames from '../ClassNames/ClassNames.ts'

export const getExtensionListItemFooter = (hasStatistics: boolean): VirtualDomNode => {
  return {
    childCount: hasStatistics ? 3 : 2,
    className: ClassNames.ExtensionListItemFooter,
    type: VirtualDomElements.Div,
  }
}
