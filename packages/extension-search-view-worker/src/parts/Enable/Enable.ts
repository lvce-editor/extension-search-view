import type { State } from '../State/State.ts'
import { getFocusedItem } from '../GetFocusedItem/GetFocusedItem.ts'
import { handleEnable } from '../HandleEnable/HandleEnable.ts'

export const enable = async (state: State): Promise<State> => {
  const item = getFocusedItem(state)
  return item ? handleEnable(state, item.id) : state
}
