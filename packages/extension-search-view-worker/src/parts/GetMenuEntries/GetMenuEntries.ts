import type { MenuEntry } from '../MenuEntry/MenuEntry.ts'
import * as ExtensionStrings from '../ExtensionStrings/ExtensionStrings.ts'
import * as MenuItemFlags from '../MenuItemFlags/MenuItemFlags.ts'

export const getMenuEntries = (): readonly MenuEntry[] => {
  return [
    {
      id: 'enable',
      label: ExtensionStrings.enable(),
      flags: MenuItemFlags.None,
      command: 'SearchExtensions.enable',
    },
    {
      id: 'disable',
      label: ExtensionStrings.disable(),
      flags: MenuItemFlags.None,
      command: 'SearchExtensions.disable',
    },
    {
      id: 'installAnotherVersion',
      label: ExtensionStrings.installAnotherVersion(),
      flags: MenuItemFlags.None,
      command: 'SearchExtensions.installAnotherVersion',
    },
    {
      id: 'copy',
      label: ExtensionStrings.copy(),
      flags: MenuItemFlags.None,
      command: 'SearchExtensions.copy',
    },
    {
      id: 'copyExtensionId',
      label: ExtensionStrings.copyExtensionId(),
      flags: MenuItemFlags.None,
      command: 'SearchExtensions.copyExtensionId',
    },
  ]
}
