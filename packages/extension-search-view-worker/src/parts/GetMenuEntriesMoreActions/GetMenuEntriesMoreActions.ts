import type { MenuEntry } from '../MenuEntry/MenuEntry.ts'
import * as ExtensionStrings from '../ExtensionStrings/ExtensionStrings.ts'
import * as MenuItemFlags from '../MenuItemFlags/MenuItemFlags.ts'

export const getMenuEntriesMoreActions = (): readonly MenuEntry[] => [
  {
    args: ['running-extensions://'],
    command: 'Main.openUri',
    flags: MenuItemFlags.None,
    id: 'showRunningExtensions',
    label: ExtensionStrings.showRunningExtensions(),
  },
]
