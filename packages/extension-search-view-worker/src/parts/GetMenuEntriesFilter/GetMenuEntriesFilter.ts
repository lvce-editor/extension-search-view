import type { MenuEntry } from '../MenuEntry/MenuEntry.ts'
import * as ExtensionStrings from '../ExtensionStrings/ExtensionStrings.ts'
import * as MenuItemFlags from '../MenuItemFlags/MenuItemFlags.ts'

export const getMenuEntriesFilter = (): readonly MenuEntry[] => {
  return [
    {
      command: 'Extensions.filterByFeatured',
      flags: MenuItemFlags.None,
      id: 'filterByFeatured',
      label: ExtensionStrings.featured(),
    },
    {
      command: 'Extensions.filterByMcpServers',
      flags: MenuItemFlags.None,
      id: 'filterByMcpServers',
      label: ExtensionStrings.mcpServers(),
    },
    {
      command: 'Extensions.filterByMostPopular',
      flags: MenuItemFlags.None,
      id: 'filterByMostPopular',
      label: ExtensionStrings.mostPopular(),
    },
    {
      command: 'Extensions.filterByRecentlyPublished',
      flags: MenuItemFlags.None,
      id: 'filterByRecentlyPublished',
      label: ExtensionStrings.recentlyPublished(),
    },
    {
      command: 'Extensions.filterByRecommended',
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
      command: 'Extensions.filterByInstalled',
      flags: MenuItemFlags.None,
      id: 'filterByInstalled',
      label: ExtensionStrings.installed(),
    },
    {
      command: 'Extensions.filterByUpdates',
      flags: MenuItemFlags.None,
      id: 'filterByUpdates',
      label: ExtensionStrings.updates(),
    },
    {
      command: 'Extensions.filterByBuiltin',
      flags: MenuItemFlags.None,
      id: 'filterByBuiltin',
      label: ExtensionStrings.builtIn(),
    },
    {
      command: 'Extensions.filterByLinked',
      flags: MenuItemFlags.None,
      id: 'filterByLinked',
      label: ExtensionStrings.linked(),
    },
    {
      command: 'Extensions.filterByEnabled',
      flags: MenuItemFlags.None,
      id: 'filterByEnabled',
      label: ExtensionStrings.enabled(),
    },
    {
      command: 'Extensions.filterByDisabled',
      flags: MenuItemFlags.None,
      id: 'filterByDisabled',
      label: ExtensionStrings.disabled(),
    },
    {
      command: 'Extensions.filterByWorkspaceUnsupported',
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
