import type { State } from '../State/State.ts'
import * as HandleUninstall from '../HandleUninstall/HandleUninstall.ts'

export const handleUninstallSelected = async (state: State): Promise<State> => {
  const { focusedIndex, items } = state
  if (focusedIndex < 0 || focusedIndex >= items.length) {
    return state
  }
  return HandleUninstall.handleUninstall(state, items[focusedIndex].id)
}
