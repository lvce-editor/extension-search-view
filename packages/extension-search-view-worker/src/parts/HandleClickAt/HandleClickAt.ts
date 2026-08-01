import { MouseEventType } from '@lvce-editor/virtual-dom-worker'
import type { State } from '../State/State.ts'
import * as GetListIndex from '../GetListIndex/GetListIndex.ts'
import { handleClick } from '../HandleClick/HandleClick.ts'
import { handleCompletionPointerDown } from '../HandleCompletionPointerDown/HandleCompletionPointerDown.ts'

export const handleClickAt = async (state: State, button: number, eventX: number, eventY: number, name = ''): Promise<State> => {
  if (name.startsWith('@')) {
    return handleCompletionPointerDown(state, name)
  }
  if (name) {
    return state
  }
  if (button !== MouseEventType.LeftClick) {
    return state
  }
  const { deltaY, headerHeight, itemHeight, x, y } = state
  const index = GetListIndex.getListIndex(eventX, eventY, x, y, deltaY, itemHeight, headerHeight)
  return handleClick(state, index)
}
