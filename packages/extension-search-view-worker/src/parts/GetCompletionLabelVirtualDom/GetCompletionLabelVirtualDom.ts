import { VirtualDomElements } from '@lvce-editor/virtual-dom-worker'
import type { VirtualDomNode } from '../VirtualDomNode/VirtualDomNode.ts'
import * as ClassNames from '../ClassNames/ClassNames.ts'
import { text } from '../VirtualDomHelpers/VirtualDomHelpers.ts'

export const getCompletionLabelVirtualDom = (label: string, highlights: readonly number[]): readonly VirtualDomNode[] => {
  const dom: VirtualDomNode[] = []
  let position = 0
  for (let i = 0; i < highlights.length; i += 2) {
    const start = highlights[i]
    const end = highlights[i + 1]
    if (position < start) {
      dom.push(text(label.slice(position, start)))
    }
    dom.push(
      {
        childCount: 1,
        className: ClassNames.ExtensionSearchCompletionHighlight,
        name: label,
        type: VirtualDomElements.Span,
      },
      text(label.slice(start, end)),
    )
    position = end
  }
  if (position < label.length) {
    dom.push(text(label.slice(position)))
  }
  return dom
}
