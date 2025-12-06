import type { MenuEntry } from '../MenuEntry/MenuEntry.ts'
import * as ExtensionStrings from '../ExtensionStrings/ExtensionStrings.ts'
import * as MenuItemFlags from '../MenuItemFlags/MenuItemFlags.ts'

export const getMenuEntries = (): readonly MenuEntry[] => {
  return [
    {
      command: 'SearchExtensions.enable',
      flags: MenuItemFlags.None,
      id: 'enable',
      label: ExtensionStrings.enable(),
    },
    {
      command: 'SearchExtensions.disable',
      flags: MenuItemFlags.None,
      id: 'disable',
      label: ExtensionStrings.disable(),
    },
    {
      command: 'SearchExtensions.installAnotherVersion',
      flags: MenuItemFlags.None,
      id: 'installAnotherVersion',
      label: ExtensionStrings.installAnotherVersion(),
    },
    {
      command: 'Extensions.copyExtensionInfo',
      flags: MenuItemFlags.None,
      id: 'copy',
      label: ExtensionStrings.copy(),
    },
    {
      command: 'Extensions.copyExtensionId',
      flags: MenuItemFlags.None,
      id: 'copyExtensionId',
      label: ExtensionStrings.copyExtensionId(),
    },
  ]
}
