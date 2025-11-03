import { expect, test } from '@jest/globals'
import type { ExtensionListItem } from '../src/parts/ExtensionListItem/ExtensionListItem.js'
import type { ParsedExtensionSearchValue } from '../src/parts/ParsedExtensionSearchValue/ParsedExtensionSearchValue.js'
import { matchesParsedValue } from '../src/parts/MatchesParsedValue/MatchesParsedValue.js'

const createExtension = (name: string, id: string): ExtensionListItem => ({
  name,
  id,
  publisher: 'test-publisher',
  icon: 'test-icon',
  description: 'test-description',
  uri: 'test-uri',
})

const createParsedValue = (query: string): ParsedExtensionSearchValue => ({
  installed: false,
  enabled: true,
  disabled: false,
  builtin: false,
  sort: 'name',
  id: '',
  outdated: false,
  query,
  isLocal: false,
})

test('matches extension by name', () => {
  const extension = createExtension('Test Extension', 'test-extension')
  const parsedValue = createParsedValue('test')
  expect(matchesParsedValue(extension, parsedValue)).toBe(true)
})

test('matches extension by id', () => {
  const extension = createExtension('Test Extension', 'test-extension')
  const parsedValue = createParsedValue('extension')
  expect(matchesParsedValue(extension, parsedValue)).toBe(true)
})

test('does not match when query is not found in name or id', () => {
  const extension = createExtension('Test Extension', 'test-extension')
  const parsedValue = createParsedValue('xyz')
  expect(matchesParsedValue(extension, parsedValue)).toBe(false)
})

test('case insensitive matching', () => {
  const extension = createExtension('Test Extension', 'test-extension')
  const parsedValue = createParsedValue('TEST')
  expect(matchesParsedValue(extension, parsedValue)).toBe(false)
})

test('exact id match when parsedValue.id is set', () => {
  const extension = createExtension('Test Extension', 'test-extension-id')
  const parsedValue: ParsedExtensionSearchValue = {
    installed: false,
    enabled: true,
    disabled: false,
    builtin: false,
    sort: 'name',
    id: 'test-extension-id',
    outdated: false,
    query: 'ignored',
    isLocal: false,
  }
  expect(matchesParsedValue(extension, parsedValue)).toBe(true)
})

test('exact id match fails when ids do not match', () => {
  const extension = createExtension('Test Extension', 'test-extension-id')
  const parsedValue: ParsedExtensionSearchValue = {
    installed: false,
    enabled: true,
    disabled: false,
    builtin: false,
    sort: 'name',
    id: 'different-id',
    outdated: false,
    query: 'ignored',
    isLocal: false,
  }
  expect(matchesParsedValue(extension, parsedValue)).toBe(false)
})

test('matches partial name in middle of name', () => {
  const extension = createExtension('My Awesome Extension', 'my-awesome-extension')
  const parsedValue = createParsedValue('awesome')
  expect(matchesParsedValue(extension, parsedValue)).toBe(true)
})

test('matches partial id in middle of id when extension has no name', () => {
  const extension: ExtensionListItem = {
    name: '',
    id: 'my-awesome-extension',
    publisher: 'test-publisher',
    icon: 'test-icon',
    description: 'test-description',
    uri: 'test-uri',
  }
  const parsedValue = createParsedValue('awesome')
  expect(matchesParsedValue(extension, parsedValue)).toBe(true)
})

test('matches query at start of name', () => {
  const extension = createExtension('Test Extension', 'test-extension')
  const parsedValue = createParsedValue('test')
  expect(matchesParsedValue(extension, parsedValue)).toBe(true)
})

test('matches query at end of name', () => {
  const extension = createExtension('Test Extension', 'test-extension')
  const parsedValue = createParsedValue('extension')
  expect(matchesParsedValue(extension, parsedValue)).toBe(true)
})

test('matches query at start of id', () => {
  const extension = createExtension('Test Extension', 'test-extension')
  const parsedValue = createParsedValue('test')
  expect(matchesParsedValue(extension, parsedValue)).toBe(true)
})

test('matches query at end of id', () => {
  const extension = createExtension('Test Extension', 'test-extension')
  const parsedValue = createParsedValue('extension')
  expect(matchesParsedValue(extension, parsedValue)).toBe(true)
})

test('matches empty query string', () => {
  const extension = createExtension('Test Extension', 'test-extension')
  const parsedValue = createParsedValue('')
  expect(matchesParsedValue(extension, parsedValue)).toBe(true)
})

test('matches extension with special characters in name', () => {
  const extension = createExtension('Test & Extension', 'test-extension')
  const parsedValue = createParsedValue('&')
  expect(matchesParsedValue(extension, parsedValue)).toBe(true)
})

test('matches extension with special characters in id when extension has no name', () => {
  const extension: ExtensionListItem = {
    name: '',
    id: 'test-extension-v2',
    publisher: 'test-publisher',
    icon: 'test-icon',
    description: 'test-description',
    uri: 'test-uri',
  }
  const parsedValue = createParsedValue('v2')
  expect(matchesParsedValue(extension, parsedValue)).toBe(true)
})

test('matches multiple words in extension name', () => {
  const extension = createExtension('Visual Studio Code Extension', 'vscode-extension')
  const parsedValue = createParsedValue('studio')
  expect(matchesParsedValue(extension, parsedValue)).toBe(true)
})

test('matches full name', () => {
  const extension = createExtension('Test Extension', 'test-extension')
  const parsedValue = createParsedValue('test extension')
  expect(matchesParsedValue(extension, parsedValue)).toBe(true)
})

test('matches full id when extension has no name', () => {
  const extension: ExtensionListItem = {
    name: '',
    id: 'test-extension',
    publisher: 'test-publisher',
    icon: 'test-icon',
    description: 'test-description',
    uri: 'test-uri',
  }
  const parsedValue = createParsedValue('test-extension')
  expect(matchesParsedValue(extension, parsedValue)).toBe(true)
})

test('does not match when query is longer than name', () => {
  const extension = createExtension('Test', 'test')
  const parsedValue = createParsedValue('test-extension')
  expect(matchesParsedValue(extension, parsedValue)).toBe(false)
})

test('does not match when query is longer than id', () => {
  const extension = createExtension('Test Extension', 'test')
  const parsedValue = createParsedValue('test-extension')
  expect(matchesParsedValue(extension, parsedValue)).toBe(false)
})

test('matches with numbers in name', () => {
  const extension = createExtension('Extension 2024', 'extension-2024')
  const parsedValue = createParsedValue('2024')
  expect(matchesParsedValue(extension, parsedValue)).toBe(true)
})

test('matches with numbers in id when extension has no name', () => {
  const extension: ExtensionListItem = {
    name: '',
    id: 'extension-2024',
    publisher: 'test-publisher',
    icon: 'test-icon',
    description: 'test-description',
    uri: 'test-uri',
  }
  const parsedValue = createParsedValue('2024')
  expect(matchesParsedValue(extension, parsedValue)).toBe(true)
})

test('case insensitive matching with lowercase query and uppercase name', () => {
  const extension = createExtension('TEST EXTENSION', 'test-extension')
  const parsedValue = createParsedValue('test')
  expect(matchesParsedValue(extension, parsedValue)).toBe(true)
})

test('case insensitive matching with uppercase query and lowercase name', () => {
  const extension = createExtension('test extension', 'test-extension')
  const parsedValue = createParsedValue('test')
  expect(matchesParsedValue(extension, parsedValue)).toBe(true)
})

test('case insensitive matching with mixed case', () => {
  const extension = createExtension('Test Extension', 'Test-Extension')
  const parsedValue = createParsedValue('test')
  expect(matchesParsedValue(extension, parsedValue)).toBe(true)
})

test('when parsedValue.id is set, exact match takes precedence over query', () => {
  const extension = createExtension('Different Name', 'target-id')
  const parsedValue: ParsedExtensionSearchValue = {
    installed: false,
    enabled: true,
    disabled: false,
    builtin: false,
    sort: 'name',
    id: 'target-id',
    outdated: false,
    query: 'different',
    isLocal: false,
  }
  expect(matchesParsedValue(extension, parsedValue)).toBe(true)
})

test('when parsedValue.id is set but does not match, returns false even if query matches', () => {
  const extension = createExtension('Test Extension', 'test-extension')
  const parsedValue: ParsedExtensionSearchValue = {
    installed: false,
    enabled: true,
    disabled: false,
    builtin: false,
    sort: 'name',
    id: 'different-id',
    outdated: false,
    query: 'test',
    isLocal: false,
  }
  expect(matchesParsedValue(extension, parsedValue)).toBe(false)
})
