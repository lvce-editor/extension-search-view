import { RendererWorker } from '@lvce-editor/rpc-registry'
import type { State } from '../State/State.ts'
import * as ExtensionStatus from '../ExtensionStatus/ExtensionStatus.ts'
import * as SetExtensionStatus from '../SetExtensionStatus/SetExtensionStatus.ts'

export const handleInstall = async (state: State, id: string): Promise<State> => {
  await RendererWorker.installExtension(id)
  return SetExtensionStatus.setExtensionStatus(state, id, ExtensionStatus.Enabled)
}
