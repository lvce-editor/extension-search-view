import { RendererWorker } from '@lvce-editor/rpc-registry'
import type { State } from '../State/State.ts'
import { getExtensionInfoText } from '../GetExtensionInfoText/GetExtensionInfoText.ts'
import { getFocusedItem } from '../GetFocusedItem/GetFocusedItem.ts'

export const copyExtensionInfo = async (state: State): Promise<State> => {
  const item = getFocusedItem(state)
  if (!item) {
    return state
  }
  const text = getExtensionInfoText(item)
  await RendererWorker.writeClipBoardText(text)
  return state
}
