import type { MenuEntry } from '../MenuEntry/MenuEntry.ts'
import type { State } from '../State/State.ts'
import { getMenuEntries } from '../GetMenuEntries/GetMenuEntries.ts'

export const getMenuEntries2 = (state: State): readonly MenuEntry[] => {
  return getMenuEntries()
}
