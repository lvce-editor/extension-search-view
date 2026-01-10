import { expect, test } from '@jest/globals'
import { getMenuEntriesFilter } from '../src/parts/GetMenuEntriesFilter/GetMenuEntriesFilter.ts'

test('returns array with filter menu entries', () => {
  const menuEntries = getMenuEntriesFilter()
  expect(menuEntries).toBeDefined()
})
