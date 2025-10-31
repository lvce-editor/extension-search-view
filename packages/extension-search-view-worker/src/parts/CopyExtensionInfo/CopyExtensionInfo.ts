import { RendererWorker } from '@lvce-editor/rpc-registry'
import type { State } from '../State/State.ts'
import { getExtensionInfoText } from '../GetExtensionInfoText/GetExtensionInfoText.ts'

export const copyExtensionInfo = async (state: State): Promise<State> => {
  const { items, focusedIndex } = state
  if (focusedIndex === -1) {
    return state
  }
  const item = items[focusedIndex]
  const text = getExtensionInfoText(item)
  await RendererWorker.writeClipBoardText(text)
  return state
}
