import type { State } from '../State/State.ts'
import * as GetExtensionHeaderVirtualDom from '../GetExtensionHeaderVirtualDom/GetExtensionHeaderVirtualDom.ts'
import * as GetInputActions from '../GetInputActions/GetInputActions.ts'

export const renderHeader = (newState: State): readonly any[] => {
  const actions = GetInputActions.getInputActions(newState)
  const dom = GetExtensionHeaderVirtualDom.getExtensionHeaderVirtualDom(newState.placeholder, actions)
  return ['setHeaderDom', dom]
}
