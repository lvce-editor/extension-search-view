import { RendererWorker } from '@lvce-editor/rpc-registry'
import type { State } from '../State/State.ts'
import { getFocusedItem } from '../GetFocusedItem/GetFocusedItem.ts'

export const copyExtensionId = async (state: State): Promise<State> => {
  const item = getFocusedItem(state)
  if (!item) {
    return state
  }
  const { id } = item
  await RendererWorker.writeClipBoardText(id)
  return state
}
