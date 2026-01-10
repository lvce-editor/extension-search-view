import { MenuEntryId } from '@lvce-editor/constants'
import type { ContextMenuProps } from '../ContextMenuProps/ContextMenuProps.ts'
import type { MenuEntry } from '../MenuEntry/MenuEntry.ts'
import type { State } from '../State/State.ts'
import { getMenuEntries } from '../GetMenuEntries/GetMenuEntries.ts'
import { getMenuEntriesFilter } from '../GetMenuEntriesFilter/GetMenuEntriesFilter.ts'

export const getMenuEntries2 = (state: State, props: ContextMenuProps): readonly MenuEntry[] => {
  const { menuId } = props
  switch (menuId) {
    case MenuEntryId.ExtensionSearchFilter:
      return getMenuEntriesFilter()
    default:
      return getMenuEntries()
  }
}
