import { expect, test } from '@jest/globals'
import { commandMap } from '../src/parts/CommandMap/CommandMap.ts'
import { createDefaultState } from '../src/parts/CreateDefaultState/CreateDefaultState.ts'
import * as ExtensionSearchViewStates from '../src/parts/ExtensionSearchViewStates/ExtensionSearchViewStates.ts'
import { getMenuEntries2 } from '../src/parts/GetMenuEntries2/GetMenuEntries2.ts'
import { getMenuIds } from '../src/parts/GetMenuIds/GetMenuIds.ts'
import { getMenuEntriesFilter } from '../src/parts/GetMenuEntriesFilter/GetMenuEntriesFilter.ts'
import * as MenuItemFlags from '../src/parts/MenuItemFlags/MenuItemFlags.ts'

test('returns array with filter menu entries', () => {
  const menuEntries = getMenuEntriesFilter()
  expect(menuEntries).toBeDefined()
})

test('simple filter entries execute registered extension view commands', () => {
  const registeredCommands = new Set(Object.keys(commandMap).map((command) => `Extensions.${command.slice(command.indexOf('.') + 1)}`))
  const simpleFilterCommands = getMenuEntriesFilter()
    .filter((entry) => entry.flags === MenuItemFlags.None)
    .map((entry) => entry.command)

  expect(simpleFilterCommands).toHaveLength(12)
  expect(simpleFilterCommands.every((command) => command.startsWith('Extensions.'))).toBe(true)
  expect(simpleFilterCommands.every((command) => registeredCommands.has(command))).toBe(true)
})

test.each([
  ['filterByFeatured', '@featured'],
  ['filterByMcpServers', '@mcpservers'],
  ['filterByMostPopular', '@most-popular'],
  ['filterByRecentlyPublished', '@recentlypublished'],
  ['filterByRecommended', '@recommended'],
  ['filterByInstalled', '@installed'],
  ['filterByUpdates', '@outdated'],
  ['filterByBuiltin', '@builtin'],
  ['filterByLinked', '@linked'],
  ['filterByEnabled', '@enabled'],
  ['filterByDisabled', '@disabled'],
  ['filterByWorkspaceUnsupported', '@workspaceunsupported'],
])('%s applies %s', async (id, expectedValue) => {
  const state = { ...createDefaultState(), uid: 123 }
  const { uid } = state
  ExtensionSearchViewStates.set(uid, state, state)
  const command = commandMap[`SearchExtensions.${id}` as keyof typeof commandMap] as (uid: number) => Promise<void>

  await command(uid)

  const { newState } = ExtensionSearchViewStates.get(uid)
  expect(newState.searchValue).toBe(expectedValue)
})

test('category submenu uses a registered menu and exposes executable category filters', async () => {
  const category = getMenuEntriesFilter().find((entry) => entry.label === 'Category')!
  expect(getMenuIds()).toContain(category.id)
  const state = { ...createDefaultState(), uid: 123 }
  const entries = getMenuEntries2(state, category.args![0])
  expect(entries).toHaveLength(20)
  expect(entries.map((entry) => entry.label)).toContain('Themes')
  expect(entries.map((entry) => entry.label)).toContain('Programming Languages')
  for (const entry of entries) {
    ExtensionSearchViewStates.set(state.uid, state, state)
    expect(entry.command).toBe('Extensions.filterByCategory')
    const command = commandMap['SearchExtensions.filterByCategory']
    await command(state.uid, entry.args![0])
    expect(ExtensionSearchViewStates.get(state.uid).newState.searchValue).toBe(entry.args![0])
  }
})
