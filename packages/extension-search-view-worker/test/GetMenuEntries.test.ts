import { expect, test } from '@jest/globals'
import { commandMap } from '../src/parts/CommandMap/CommandMap.ts'
import { getMenuEntriesList } from '../src/parts/GetMenuEntries/GetMenuEntries.ts'
import * as MenuItemFlags from '../src/parts/MenuItemFlags/MenuItemFlags.ts'

test('getMenuEntries commands exist in commandMap', () => {
  const missingCommands = getMenuEntriesList(false)
    .filter((menuEntry): boolean => menuEntry.command !== '')
    .map((menuEntry): string => menuEntry.command)
    .filter((command): boolean => !(command in commandMap))
  expect(missingCommands).toEqual([])
})

test('enables install another version for non-builtin extensions', () => {
  const menuEntry = getMenuEntriesList(false).find((entry) => entry.id === 'installAnotherVersion')
  expect(menuEntry?.flags).toBe(MenuItemFlags.None)
})

test('disables install another version for builtin extensions', () => {
  const menuEntry = getMenuEntriesList(true).find((entry) => entry.id === 'installAnotherVersion')
  expect(menuEntry?.flags).toBe(MenuItemFlags.Disabled)
})

test('disables enable actions for enabled extensions', () => {
  const menuEntries = getMenuEntriesList(false, false, 'enabled')
  expect(menuEntries.find((entry) => entry.id === 'enable')?.flags).toBe(MenuItemFlags.Disabled)
  expect(menuEntries.find((entry) => entry.id === 'enableWorkspace')?.flags).toBe(MenuItemFlags.Disabled)
  expect(menuEntries.find((entry) => entry.id === 'disable')?.flags).toBe(MenuItemFlags.None)
  expect(menuEntries.find((entry) => entry.id === 'disableWorkspace')?.flags).toBe(MenuItemFlags.None)
})

test('disables disable actions for disabled extensions', () => {
  const menuEntries = getMenuEntriesList(false, true, 'disabled')
  expect(menuEntries.find((entry) => entry.id === 'enable')?.flags).toBe(MenuItemFlags.None)
  expect(menuEntries.find((entry) => entry.id === 'enableWorkspace')?.flags).toBe(MenuItemFlags.None)
  expect(menuEntries.find((entry) => entry.id === 'disable')?.flags).toBe(MenuItemFlags.Disabled)
  expect(menuEntries.find((entry) => entry.id === 'disableWorkspace')?.flags).toBe(MenuItemFlags.Disabled)
})

test.each(['installing', 'not-installed', 'uninstalling'])('disables enablement actions for %s extensions', (status) => {
  const menuEntries = getMenuEntriesList(false, false, status)
  expect(menuEntries.find((entry) => entry.id === 'enable')?.flags).toBe(MenuItemFlags.Disabled)
  expect(menuEntries.find((entry) => entry.id === 'enableWorkspace')?.flags).toBe(MenuItemFlags.Disabled)
  expect(menuEntries.find((entry) => entry.id === 'disable')?.flags).toBe(MenuItemFlags.Disabled)
  expect(menuEntries.find((entry) => entry.id === 'disableWorkspace')?.flags).toBe(MenuItemFlags.Disabled)
})
