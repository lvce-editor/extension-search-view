import type { ExtensionListItem } from '../ExtensionListItem/ExtensionListItem.ts'
import type { State } from '../State/State.ts'

export const getFocusedItem = (state: State): ExtensionListItem | undefined => {
  const { focusedIndex, items } = state
  if (focusedIndex === -1) {
    return undefined
  }
  const item = items[focusedIndex]
  return item
}
