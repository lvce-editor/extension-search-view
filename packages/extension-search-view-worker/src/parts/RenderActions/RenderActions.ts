import type { Action } from '../Action/Action.ts'
import type { VirtualDomNode } from '../VirtualDomNode/VirtualDomNode.ts'
import * as ExtensionSearchViewStates from '../ExtensionSearchViewStates/ExtensionSearchViewStates.ts'
import * as GetActionsVirtualDom from '../GetActionsVirtualDom/GetActionsVirtualDom.ts'

export const renderActions = (uid: number): readonly VirtualDomNode[] => {
  const { newState, oldState } = ExtensionSearchViewStates.get(uid)
  if (oldState === newState) {
    return []
  }
  const actions: readonly Action[] = []
  const dom = GetActionsVirtualDom.getActionsVirtualDom(actions)
  return dom
}
