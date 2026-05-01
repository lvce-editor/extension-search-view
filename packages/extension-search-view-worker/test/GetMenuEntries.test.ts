import { expect, test } from '@jest/globals'
import { commandMap } from '../src/parts/CommandMap/CommandMap.ts'
import { getMenuEntriesList } from '../src/parts/GetMenuEntries/GetMenuEntries.ts'

test('getMenuEntries commands exist in commandMap', () => {
  const missingCommands = getMenuEntriesList()
    .filter((menuEntry): boolean => menuEntry.command !== '')
    .map((menuEntry): string => menuEntry.command)
    .filter((command): boolean => !(command in commandMap))
  expect(missingCommands).toEqual([])
})
