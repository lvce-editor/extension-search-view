import type { MenuEntry } from '../MenuEntry/MenuEntry.ts'
import * as ExtensionStrings from '../ExtensionStrings/ExtensionStrings.ts'
import * as MenuItemFlags from '../MenuItemFlags/MenuItemFlags.ts'

export const getMenuEntriesFilter = (): readonly MenuEntry[] => {
  return [
    {
      command: 'SearchExtensions.filterByFeatured',
      flags: MenuItemFlags.None,
      id: 'filterByFeatured',
      label: ExtensionStrings.featured(),
    },
    {
      command: 'SearchExtensions.filterByMcpServers',
      flags: MenuItemFlags.None,
      id: 'filterByMcpServers',
      label: ExtensionStrings.mcpServers(),
    },
    {
      command: 'SearchExtensions.filterByMostPopular',
      flags: MenuItemFlags.None,
      id: 'filterByMostPopular',
      label: ExtensionStrings.mostPopular(),
    },
    {
      command: 'SearchExtensions.filterByRecentlyPublished',
      flags: MenuItemFlags.None,
      id: 'filterByRecentlyPublished',
      label: ExtensionStrings.recentlyPublished(),
    },
    {
      command: 'SearchExtensions.filterByRecommended',
      flags: MenuItemFlags.None,
      id: 'filterByRecommended',
      label: ExtensionStrings.recommended(),
    },
    {
      command: '',
      flags: MenuItemFlags.Separator,
      id: 'separator1',
      label: '',
    },
    {
      command: 'SearchExtensions.filterByCategory',
      flags: MenuItemFlags.SubMenu,
      id: 'filterByCategory',
      label: ExtensionStrings.category(),
    },
    {
      command: 'SearchExtensions.filterByInstalled',
      flags: MenuItemFlags.None,
      id: 'filterByInstalled',
      label: ExtensionStrings.installed(),
    },
    {
      command: 'SearchExtensions.filterByUpdates',
      flags: MenuItemFlags.None,
      id: 'filterByUpdates',
      label: ExtensionStrings.updates(),
    },
    {
      command: 'SearchExtensions.filterByBuiltin',
      flags: MenuItemFlags.None,
      id: 'filterByBuiltin',
      label: ExtensionStrings.builtIn(),
    },
    {
      command: 'SearchExtensions.filterByEnabled',
      flags: MenuItemFlags.None,
      id: 'filterByEnabled',
      label: ExtensionStrings.enabled(),
    },
    {
      command: 'SearchExtensions.filterByDisabled',
      flags: MenuItemFlags.None,
      id: 'filterByDisabled',
      label: ExtensionStrings.disabled(),
    },
    {
      command: 'SearchExtensions.filterByWorkspaceUnsupported',
      flags: MenuItemFlags.None,
      id: 'filterByWorkspaceUnsupported',
      label: ExtensionStrings.workspaceUnsupported(),
    },
    {
      command: '',
      flags: MenuItemFlags.Separator,
      id: 'separator2',
      label: '',
    },
    {
      command: 'SearchExtensions.filterBySortBy',
      flags: MenuItemFlags.SubMenu,
      id: 'filterBySortBy',
      label: ExtensionStrings.sortBy(),
    },
  ]
}
