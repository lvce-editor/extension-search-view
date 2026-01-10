import { expect, test } from '@jest/globals'
import * as ExtensionStrings from '../src/parts/ExtensionStrings/ExtensionStrings.ts'

test('noExtensionsFound', () => {
  expect(ExtensionStrings.noExtensionsFound()).toBe('No extensions found.')
})

test('filter', () => {
  expect(ExtensionStrings.filter()).toBe('Filter')
})

test('refresh', () => {
  expect(ExtensionStrings.refresh()).toBe('Refresh')
})

test('extensions', () => {
  expect(ExtensionStrings.extensions()).toBe('Extensions')
})

test('clearExtensionSearchResults', () => {
  expect(ExtensionStrings.clearExtensionSearchResults()).toBe('Clear extension search results')
})

test('enable', () => {
  expect(ExtensionStrings.enable()).toBe('Enable')
})

test('disable', () => {
  expect(ExtensionStrings.disable()).toBe('Disable')
})

test('uninstall', () => {
  expect(ExtensionStrings.uninstall()).toBe('Uninstall')
})

test('installAnotherVersion', () => {
  expect(ExtensionStrings.installAnotherVersion()).toBe('Install Another Version')
})

test('viewsAndMoreActions', () => {
  expect(ExtensionStrings.viewsAndMoreActions()).toBe('Views and more Actions...')
})

test('installed', () => {
  expect(ExtensionStrings.installed()).toBe('Installed')
})

test('searchExtensionsInMarketPlace', () => {
  expect(ExtensionStrings.searchExtensionsInMarketPlace()).toBe('Search Extensions in Marketplace')
})

test('name', () => {
  expect(ExtensionStrings.name()).toBe('Name')
})

test('id', () => {
  expect(ExtensionStrings.id()).toBe('Id')
})

test('version', () => {
  expect(ExtensionStrings.version()).toBe('Version')
})

test('description', () => {
  expect(ExtensionStrings.description()).toBe('Description')
})

test('publisher', () => {
  expect(ExtensionStrings.publisher()).toBe('Publisher')
})

test('marketplaceLink', () => {
  expect(ExtensionStrings.marketplaceLink()).toBe('Marketplace Link')
})

test('copy', () => {
  expect(ExtensionStrings.copy()).toBe('Copy')
})

test('copyExtensionId', () => {
  expect(ExtensionStrings.copyExtensionId()).toBe('Copy Extension Id')
})

test('enableWorkspace', () => {
  expect(ExtensionStrings.enableWorkspace()).toBe('Enable Workspace')
})

test('disableWorkspace', () => {
  expect(ExtensionStrings.disableWorkspace()).toBe('Disable Workspace')
})

test('category', () => {
  expect(ExtensionStrings.category()).toBe('Category')
})

test('disabled', () => {
  expect(ExtensionStrings.disabled()).toBe('Disabled')
})
