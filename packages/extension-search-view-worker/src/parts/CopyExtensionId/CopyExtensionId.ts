import { RendererWorker } from '@lvce-editor/rpc-registry'
import type { State } from '../State/State.ts'

export const copyExtensionId = async (state: State): Promise<State> => {
  const { items, focusedIndex } = state
  if (focusedIndex === -1) {
    return state
  }
  const item = items[focusedIndex]
  const { id } = item
  await RendererWorker.writeClipBoardText(id)
  return state
}
