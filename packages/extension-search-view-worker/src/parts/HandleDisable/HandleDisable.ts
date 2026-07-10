import { RendererWorker } from '@lvce-editor/rpc-registry'
import type { State } from '../State/State.ts'
import * as ExtensionStatus from '../ExtensionStatus/ExtensionStatus.ts'
import * as SetExtensionStatus from '../SetExtensionStatus/SetExtensionStatus.ts'

export const handleDisable = async (state: State, id: string): Promise<State> => {
  const error = await RendererWorker.disableExtension(id)
  return error ? state : SetExtensionStatus.setExtensionStatus(state, id, ExtensionStatus.Disabled)
}
