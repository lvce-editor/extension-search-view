import { expect, test } from '@jest/globals'
import { commandMap } from '../src/parts/CommandMap/CommandMap.ts'
import { getMenuEntries } from '../src/parts/GetMenuEntries/GetMenuEntries.ts'

test('getMenuEntries commands exist in commandMap', () => {
  const missingCommands = getMenuEntries()
    .filter((menuEntry) => menuEntry.command !== '')
    .map((menuEntry) => menuEntry.command)
    .filter((command) => !(command in commandMap))
  expect(missingCommands).toEqual([])
})
