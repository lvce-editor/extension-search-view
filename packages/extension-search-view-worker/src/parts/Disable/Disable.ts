import type { State } from '../State/State.ts'
import { getFocusedItem } from '../GetFocusedItem/GetFocusedItem.ts'
import { handleDisable } from '../HandleDisable/HandleDisable.ts'

export const disable = async (state: State): Promise<State> => {
  const item = getFocusedItem(state)
  return item ? handleDisable(state, item.id) : state
}
