import { RendererWorker } from '@lvce-editor/rpc-registry'
import type { State } from '../State/State.ts'

export const installAnotherVersion = async (state: State): Promise<State> => {
  await RendererWorker.confirm('not implemented')
  return state
}
