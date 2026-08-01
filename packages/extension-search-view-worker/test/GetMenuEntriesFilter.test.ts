import { expect, test } from '@jest/globals'
import { getMenuEntriesFilter } from '../src/parts/GetMenuEntriesFilter/GetMenuEntriesFilter.ts'

test('returns array with filter menu entries', () => {
  const menuEntries = getMenuEntriesFilter()
  expect(menuEntries).toBeDefined()
})

test('most popular entry executes the extension view command', () => {
  const menuEntries = getMenuEntriesFilter()
  const mostPopular = menuEntries.find((entry) => entry.id === 'filterByMostPopular')

  expect(mostPopular?.command).toBe('Extensions.filterByMostPopular')
})
