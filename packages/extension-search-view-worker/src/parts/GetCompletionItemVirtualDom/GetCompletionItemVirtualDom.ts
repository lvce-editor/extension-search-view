import { mergeClassNames, VirtualDomElements } from '@lvce-editor/virtual-dom-worker'
import type { CompletionItem } from '../CompletionItem/CompletionItem.ts'
import type { VirtualDomNode } from '../VirtualDomNode/VirtualDomNode.ts'
import * as AriaRoles from '../AriaRoles/AriaRoles.ts'
import * as ClassNames from '../ClassNames/ClassNames.ts'
import * as DomEventListenerFunctions from '../DomEventListenerFunctions/DomEventListenerFunctions.ts'
import { getCompletionLabelVirtualDom } from '../GetCompletionLabelVirtualDom/GetCompletionLabelVirtualDom.ts'

const getRootNodeCount = (nodes: readonly VirtualDomNode[]): number => {
  let count = 0
  const remainingChildCounts: number[] = []
  for (const node of nodes) {
    while (remainingChildCounts.length > 0 && remainingChildCounts.at(-1) === 0) {
      remainingChildCounts.pop()
    }
    if (remainingChildCounts.length === 0) {
      count++
    } else {
      const lastIndex = remainingChildCounts.length - 1
      remainingChildCounts[lastIndex]--
    }
    remainingChildCounts.push(node.childCount)
  }
  return count
}

export const getCompletionItemVirtualDom = (item: CompletionItem, index: number, focusedIndex: number): readonly VirtualDomNode[] => {
  const labelDom = getCompletionLabelVirtualDom(item.label, item.highlights)
  const focused = index === focusedIndex
  return [
    {
      ariaSelected: focused,
      childCount: getRootNodeCount(labelDom),
      className: focused
        ? mergeClassNames(ClassNames.ExtensionSearchCompletionItem, ClassNames.ExtensionSearchCompletionItemFocused)
        : ClassNames.ExtensionSearchCompletionItem,
      id: `ExtensionSearchCompletion-${index}`,
      name: item.label,
      onPointerDown: DomEventListenerFunctions.HandlePointerDown,
      role: AriaRoles.Option,
      type: VirtualDomElements.Button,
    },
    ...labelDom,
  ]
}
