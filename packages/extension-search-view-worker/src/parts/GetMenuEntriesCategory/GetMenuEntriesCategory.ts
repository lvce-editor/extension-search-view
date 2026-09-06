import type { MenuEntry } from '../MenuEntry/MenuEntry.ts'
import { CategorySuggestions } from '../CategorySuggestions/CategorySuggestions.ts'
import * as MenuItemFlags from '../MenuItemFlags/MenuItemFlags.ts'

const RE_WORD_START = /\b[a-z]/g

export const getMenuEntriesCategory = (): readonly MenuEntry[] => {
  return CategorySuggestions.map((query) => ({
    args: [query],
    command: 'Extensions.filterByCategory',
    flags: MenuItemFlags.None,
    id: query,
    label: query
      .slice(11, -1)
      .replaceAll(RE_WORD_START, (character) => character.toUpperCase())
      .replace('Ai', 'AI')
      .replace('Scm', 'SCM'),
  }))
}
