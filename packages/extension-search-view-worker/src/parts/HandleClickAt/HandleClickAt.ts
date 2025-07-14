import type { State } from '../State/State.ts'
import * as GetListIndex from '../GetListIndex/GetListIndex.ts'
import * as SelectIndex from '../SelectIndex/SelectIndex.ts'

export const handleClickAt = async (state: State, eventX: number, eventY: number): Promise<State> => {
  const { x, y, itemHeight, deltaY, headerHeight } = state
  const index = GetListIndex.getListIndex(eventX, eventY, x, y, deltaY, itemHeight, headerHeight)
  console.log({ index })
  return SelectIndex.selectIndex(state, index)
}
