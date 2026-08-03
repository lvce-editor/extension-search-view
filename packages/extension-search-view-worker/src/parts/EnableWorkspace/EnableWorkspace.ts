import { ExtensionManagementWorker } from '@lvce-editor/rpc-registry'
import type { State } from '../State/State.ts'
import * as ExtensionStatus from '../ExtensionStatus/ExtensionStatus.ts'
import { getFocusedItem } from '../GetFocusedItem/GetFocusedItem.ts'
import * as SetExtensionStatus from '../SetExtensionStatus/SetExtensionStatus.ts'

export const enableWorkspace = async (state: State): Promise<State> => {
  const item = getFocusedItem(state)
  if (!item) {
    return state
  }
  await ExtensionManagementWorker.invoke('Extensions.enableWorkspace', item.id)
  return SetExtensionStatus.setExtensionStatus(state, item.id, ExtensionStatus.Enabled)
}
