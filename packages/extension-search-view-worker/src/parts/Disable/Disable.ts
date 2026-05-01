import { RendererWorker } from '@lvce-editor/rpc-registry'
import type { State } from '../State/State.ts'

export const disable = async (state: State, id: string): Promise<State> => {
  void id
  await RendererWorker.confirm('not implemented')
  return state
}