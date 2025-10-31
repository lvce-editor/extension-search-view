import { MouseEventType } from '@lvce-editor/virtual-dom-worker'
import type { State } from '../State/State.ts'
import * as GetListIndex from '../GetListIndex/GetListIndex.ts'
import { handleClick } from '../HandleClick/HandleClick.ts'

export const handleClickAt = async (state: State, button: number, eventX: number, eventY: number): Promise<State> => {
  if (button !== MouseEventType.LeftClick) {
    return state
  }
  const { x, y, itemHeight, deltaY, headerHeight } = state
  const index = GetListIndex.getListIndex(eventX, eventY, x, y, deltaY, itemHeight, headerHeight)
  return handleClick(state, index)
}
