import { DialogWorker } from '@lvce-editor/rpc-registry'
import type { State } from '../State/State.ts'

export const installAnotherVersion = async (state: State): Promise<State> => {
  await DialogWorker.invoke('ConfirmPrompt.prompt', 'not implemented', undefined)
  return state
}
