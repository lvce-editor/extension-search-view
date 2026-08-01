import { text, VirtualDomElements } from '@lvce-editor/virtual-dom-worker'
import type { VirtualDomNode } from '../VirtualDomNode/VirtualDomNode.ts'
import * as ClassNames from '../ClassNames/ClassNames.ts'

const noExtensionsFoundNode: VirtualDomNode = {
  childCount: 1,
  className: ClassNames.NoExtensionsFoundMessage,
  type: VirtualDomElements.Div,
}

export const getNoExtensionsFoundVirtualDom = (message: string): readonly VirtualDomNode[] => {
  return [noExtensionsFoundNode, text(message)]
}
