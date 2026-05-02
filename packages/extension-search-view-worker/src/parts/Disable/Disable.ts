import { RendererWorker } from '@lvce-editor/rpc-registry'
import type { State } from '../State/State.ts'

export const disable = async (state: State, _id: string): Promise<State> => {
  await RendererWorker.confirm('not implemented')
  return state
}
