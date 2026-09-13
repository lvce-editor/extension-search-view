import { MenuEntryId } from '@lvce-editor/constants'
import type { ContextMenuProps } from '../ContextMenuProps/ContextMenuProps.ts'
import type { MenuEntry } from '../MenuEntry/MenuEntry.ts'
import type { State } from '../State/State.ts'
import { getMenuEntriesList } from '../GetMenuEntries/GetMenuEntries.ts'
import { getMenuEntriesCategory } from '../GetMenuEntriesCategory/GetMenuEntriesCategory.ts'
import { getMenuEntriesFilter } from '../GetMenuEntriesFilter/GetMenuEntriesFilter.ts'

export const getMenuEntries2 = (state: State, props: ContextMenuProps): readonly MenuEntry[] => {
  const { menuId } = props
  switch (menuId) {
    case MenuEntryId.ExtensionSearchFilter:
      return props.subMenu === 'category' ? getMenuEntriesCategory() : getMenuEntriesFilter()
    default:
      return getMenuEntriesList(props.builtin, props.disabled, props.status)
  }
}
