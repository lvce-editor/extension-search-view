import type { State } from '../State/State.ts'
import * as ExtensionFilterParameter from '../ExtensionFilterParameter/ExtensionFilterParameter.ts'
import * as ExtensionStrings from '../ExtensionStrings/ExtensionStrings.ts'

interface TitleFilter {
  readonly label: () => string
  readonly value: string
}

const titleFilters: readonly TitleFilter[] = [
  { label: ExtensionStrings.deprecated, value: ExtensionFilterParameter.Deprecated },
  { label: ExtensionStrings.installed, value: ExtensionFilterParameter.Installed },
  { label: ExtensionStrings.enabled, value: ExtensionFilterParameter.Enabled },
  { label: ExtensionStrings.disabled, value: ExtensionFilterParameter.Disabled },
  { label: ExtensionStrings.builtIn, value: ExtensionFilterParameter.Builtin },
  { label: ExtensionStrings.updates, value: ExtensionFilterParameter.Outdated },
  { label: ExtensionStrings.featured, value: ExtensionFilterParameter.Featured },
  { label: ExtensionStrings.mcpServers, value: ExtensionFilterParameter.McpServers },
  { label: ExtensionStrings.mostPopular, value: ExtensionFilterParameter.MostPopular },
  { label: ExtensionStrings.recentlyPublished, value: ExtensionFilterParameter.RecentlyPublished },
  { label: ExtensionStrings.recommended, value: ExtensionFilterParameter.Recommended },
  { label: ExtensionStrings.workspaceUnsupported, value: ExtensionFilterParameter.WorkspaceUnsupported },
]

const getTitleSuffix = (searchValue: string): string => {
  if (!searchValue.trim()) {
    return ExtensionStrings.installed()
  }
  const normalizedSearchValue = searchValue.toLowerCase()
  for (const filter of titleFilters) {
    if (normalizedSearchValue.includes(filter.value)) {
      return filter.label()
    }
  }
  return ExtensionStrings.marketplace()
}

export const renderTitle = (state: State): string => {
  return `${ExtensionStrings.extensions()}: ${getTitleSuffix(state.searchValue)}`
}
