import { DialogWorker } from '@lvce-editor/rpc-registry'
import type { State } from '../State/State.ts'

export const disableWorkspace = async (state: State, _id: string): Promise<State> => {
  await DialogWorker.invoke('ConfirmPrompt.prompt', 'not implemented', undefined)
  return state
}
