import { text, VirtualDomElements } from '@lvce-editor/virtual-dom-worker'
import type { VirtualDomNode } from '../VirtualDomNode/VirtualDomNode.ts'
import * as ClassNames from '../ClassNames/ClassNames.ts'

export const getNoExtensionsFoundVirtualDom = (message: string): readonly VirtualDomNode[] => {
  return [{ childCount: 1, className: ClassNames.NoExtensionsFoundMessage, type: VirtualDomElements.Div }, text(message)]
}
