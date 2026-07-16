import { expect, test } from '@jest/globals'
import { MenuEntryId } from '@lvce-editor/constants'
import { createDefaultState } from '../src/parts/CreateDefaultState/CreateDefaultState.ts'
import { getMenuEntries2 } from '../src/parts/GetMenuEntries2/GetMenuEntries2.ts'
import { getMenuEntriesList } from '../src/parts/GetMenuEntries/GetMenuEntries.ts'
import { getMenuEntriesFilter } from '../src/parts/GetMenuEntriesFilter/GetMenuEntriesFilter.ts'

test('returns filter menu entries when menuId is ExtensionSearchFilter', () => {
  const state = createDefaultState()
  const props = {
    menuId: MenuEntryId.ExtensionSearchFilter as 95,
  }
  const result = getMenuEntries2(state, props)
  expect(result).toEqual(getMenuEntriesFilter())
})

test('returns default menu entries when menuId is not ExtensionSearchFilter', () => {
  const state = createDefaultState()
  const props = {
    builtin: false,
    menuId: MenuEntryId.ManageExtension as 8,
  }
  const result = getMenuEntries2(state, props)
  expect(result).toEqual(getMenuEntriesList(false))
})

test('returns menu entries for builtin extensions', () => {
  const state = createDefaultState()
  const props = {
    builtin: true,
    menuId: MenuEntryId.ManageExtension as 8,
  }
  const result = getMenuEntries2(state, props)
  expect(result).toEqual(getMenuEntriesList(true))
})
