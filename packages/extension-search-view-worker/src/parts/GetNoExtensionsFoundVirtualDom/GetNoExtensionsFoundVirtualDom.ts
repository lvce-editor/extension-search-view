import { text, VirtualDomElements } from '@lvce-editor/virtual-dom-worker'
import type { VirtualDomNode } from '../VirtualDomNode/VirtualDomNode.ts'

export const getNoExtensionsFoundVirtualDom = (message: string): readonly VirtualDomNode[] => {
  return [{ childCount: 1, type: VirtualDomElements.Div }, text(message)]
}
