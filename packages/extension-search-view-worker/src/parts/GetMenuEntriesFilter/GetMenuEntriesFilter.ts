import type { MenuEntry } from '../MenuEntry/MenuEntry.ts'
import * as ExtensionStrings from '../ExtensionStrings/ExtensionStrings.ts'
import * as MenuItemFlags from '../MenuItemFlags/MenuItemFlags.ts'

export const getMenuEntriesFilter = (): readonly MenuEntry[] => {
  return [
    {
      command: 'SearchExtensions.filterByCategory',
      flags: MenuItemFlags.None,
      id: 'filterByCategory',
      label: ExtensionStrings.category(),
    },
    {
      command: 'SearchExtensions.filterById',
      flags: MenuItemFlags.None,
      id: 'filterById',
      label: ExtensionStrings.id(),
    },
    {
      command: 'SearchExtensions.filterByInstalled',
      flags: MenuItemFlags.None,
      id: 'filterByInstalled',
      label: ExtensionStrings.installed(),
    },
    {
      command: 'SearchExtensions.filterByDisabled',
      flags: MenuItemFlags.None,
      id: 'filterByDisabled',
      label: ExtensionStrings.disabled(),
    },
  ]
}
