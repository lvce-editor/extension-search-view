import type { MenuEntry } from '../MenuEntry/MenuEntry.ts'
import { CategorySuggestions } from '../CategorySuggestions/CategorySuggestions.ts'
import { extensionCategories } from '../ExtensionCategories/ExtensionCategories.ts'
import * as MenuItemFlags from '../MenuItemFlags/MenuItemFlags.ts'

export const getMenuEntriesCategory = (): readonly MenuEntry[] => {
  return extensionCategories.map((label, index) => ({
    args: [CategorySuggestions[index]],
    command: 'Extensions.filterByCategory',
    flags: MenuItemFlags.None,
    id: label,
    label,
  }))
}
