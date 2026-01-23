import { expect, test } from '@jest/globals'
import type { ExtensionListItem } from '../src/parts/ExtensionListItem/ExtensionListItem.js'
import type { ParsedExtensionSearchValue } from '../src/parts/ParsedExtensionSearchValue/ParsedExtensionSearchValue.js'
import { matchesParsedValue } from '../src/parts/MatchesParsedValue/MatchesParsedValue.js'

const createExtension = (name: string, id: string): ExtensionListItem => ({
  categories: [],
  description: 'test-description',
  icon: 'test-icon',
  id,
  name,
  publisher: 'test-publisher',
  size: 1000,
  updatedDate: 1000000,
  uri: 'test-uri',
})

const createParsedValue = (query: string): ParsedExtensionSearchValue => ({
  builtin: false,
  disabled: false,
  enabled: true,
  id: '',
  installed: false,
  isLocal: false,
  outdated: false,
  query,
  sort: 'name',
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
    builtin: false,
    disabled: false,
    enabled: true,
    id: 'test-extension-id',
    installed: false,
    isLocal: false,
    outdated: false,
    query: 'ignored',
    sort: 'name',
  }
  expect(matchesParsedValue(extension, parsedValue)).toBe(true)
})

test('exact id match fails when ids do not match', () => {
  const extension = createExtension('Test Extension', 'test-extension-id')
  const parsedValue: ParsedExtensionSearchValue = {
    builtin: false,
    disabled: false,
    enabled: true,
    id: 'different-id',
    installed: false,
    isLocal: false,
    outdated: false,
    query: 'ignored',
    sort: 'name',
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
    categories: [],
    description: 'test-description',
    icon: 'test-icon',
    id: 'my-awesome-extension',
    name: '',
    publisher: 'test-publisher',
    size: 1000,
    updatedDate: 1000000,
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
    categories: [],
    description: 'test-description',
    icon: 'test-icon',
    id: 'test-extension-v2',
    name: '',
    publisher: 'test-publisher',
    size: 1000,
    updatedDate: 1000000,
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
    categories: [],
    description: 'test-description',
    icon: 'test-icon',
    id: 'test-extension',
    name: '',
    publisher: 'test-publisher',
    size: 1000,
    updatedDate: 1000000,
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
    categories: [],
    description: 'test-description',
    icon: 'test-icon',
    id: 'extension-2024',
    name: '',
    publisher: 'test-publisher',
    size: 1000,
    updatedDate: 1000000,
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
    builtin: false,
    disabled: false,
    enabled: true,
    id: 'target-id',
    installed: false,
    isLocal: false,
    outdated: false,
    query: 'different',
    sort: 'name',
  }
  expect(matchesParsedValue(extension, parsedValue)).toBe(true)
})

test('when parsedValue.id is set but does not match, returns false even if query matches', () => {
  const extension = createExtension('Test Extension', 'test-extension')
  const parsedValue: ParsedExtensionSearchValue = {
    builtin: false,
    disabled: false,
    enabled: true,
    id: 'different-id',
    installed: false,
    isLocal: false,
    outdated: false,
    query: 'test',
    sort: 'name',
  }
  expect(matchesParsedValue(extension, parsedValue)).toBe(false)
})

test('category - match when category matches', () => {
  const extension: ExtensionListItem = {
    ...createExtension('Test Extension', 'test-extension'),
    categories: ['Themes'],
  }
  const parsedValue: ParsedExtensionSearchValue = {
    builtin: false,
    category: 'Themes',
    disabled: false,
    enabled: true,
    id: '',
    installed: false,
    isLocal: false,
    outdated: false,
    query: 'test',
    sort: 'name',
  }
  expect(matchesParsedValue(extension, parsedValue)).toBe(true)
})

test('category - match is case insensitive', () => {
  const extension: ExtensionListItem = {
    ...createExtension('Test Extension', 'test-extension'),
    categories: ['Themes'],
  }
  const parsedValue: ParsedExtensionSearchValue = {
    builtin: false,
    category: 'themes',
    disabled: false,
    enabled: true,
    id: '',
    installed: false,
    isLocal: false,
    outdated: false,
    query: 'test',
    sort: 'name',
  }
  expect(matchesParsedValue(extension, parsedValue)).toBe(true)
})

test('category - match with uppercase category in extension', () => {
  const extension: ExtensionListItem = {
    ...createExtension('Test Extension', 'test-extension'),
    categories: ['THEMES'],
  }
  const parsedValue: ParsedExtensionSearchValue = {
    builtin: false,
    category: 'themes',
    disabled: false,
    enabled: true,
    id: '',
    installed: false,
    isLocal: false,
    outdated: false,
    query: 'test',
    sort: 'name',
  }
  expect(matchesParsedValue(extension, parsedValue)).toBe(true)
})

test('category - does not match when category is not in categories array', () => {
  const extension: ExtensionListItem = {
    ...createExtension('Test Extension', 'test-extension'),
    categories: ['Themes'],
  }
  const parsedValue: ParsedExtensionSearchValue = {
    builtin: false,
    category: 'Programming Languages',
    disabled: false,
    enabled: true,
    id: '',
    installed: false,
    isLocal: false,
    outdated: false,
    query: 'xyz-no-match',
    sort: 'name',
  }
  expect(matchesParsedValue(extension, parsedValue)).toBe(false)
})

test('category - does not match when categories array is empty', () => {
  const extension: ExtensionListItem = {
    ...createExtension('Test Extension', 'test-extension'),
    categories: [],
  }
  const parsedValue: ParsedExtensionSearchValue = {
    builtin: false,
    category: 'Themes',
    disabled: false,
    enabled: true,
    id: '',
    installed: false,
    isLocal: false,
    outdated: false,
    query: 'xyz-no-match',
    sort: 'name',
  }
  expect(matchesParsedValue(extension, parsedValue)).toBe(false)
})

test('category - matches when category is in multiple categories', () => {
  const extension: ExtensionListItem = {
    ...createExtension('Test Extension', 'test-extension'),
    categories: ['Themes', 'Other'],
  }
  const parsedValue: ParsedExtensionSearchValue = {
    builtin: false,
    category: 'Themes',
    disabled: false,
    enabled: true,
    id: '',
    installed: false,
    isLocal: false,
    outdated: false,
    query: 'test',
    sort: 'name',
  }
  expect(matchesParsedValue(extension, parsedValue)).toBe(true)
})

test('returns false when extension has no name and no id', () => {
  const extension: ExtensionListItem = {
    categories: [],
    description: 'test-description',
    icon: 'test-icon',
    id: '',
    name: '',
    publisher: 'test-publisher',
    size: 1000,
    updatedDate: 1000000,
    uri: 'test-uri',
  }
  const parsedValue: ParsedExtensionSearchValue = {
    builtin: false,
    disabled: false,
    enabled: true,
    id: '',
    installed: false,
    isLocal: false,
    outdated: false,
    query: 'test',
    sort: 'name',
  }
  expect(matchesParsedValue(extension, parsedValue)).toBe(false)
})

test('returns false when extension has no name, no id, and no matching category', () => {
  const extension: ExtensionListItem = {
    categories: ['Other'],
    description: 'test-description',
    icon: 'test-icon',
    id: '',
    name: '',
    publisher: 'test-publisher',
    size: 1000,
    updatedDate: 1000000,
    uri: 'test-uri',
  }
  const parsedValue: ParsedExtensionSearchValue = {
    builtin: false,
    category: 'Themes',
    disabled: false,
    enabled: true,
    id: '',
    installed: false,
    isLocal: false,
    outdated: false,
    query: 'test',
    sort: 'name',
  }
  expect(matchesParsedValue(extension, parsedValue)).toBe(false)
})

test('category - throws when extension is null', () => {
  const extension = null as unknown as ExtensionListItem
  const parsedValue: ParsedExtensionSearchValue = {
    builtin: false,
    category: 'Themes',
    disabled: false,
    enabled: true,
    id: '',
    installed: false,
    isLocal: false,
    outdated: false,
    query: '',
    sort: 'name',
  }
  expect(() => matchesParsedValue(extension, parsedValue)).toThrow()
})

test('category - throws when extension is undefined', () => {
  const extension = undefined as unknown as ExtensionListItem
  const parsedValue: ParsedExtensionSearchValue = {
    builtin: false,
    category: 'Themes',
    disabled: false,
    enabled: true,
    id: '',
    installed: false,
    isLocal: false,
    outdated: false,
    query: '',
    sort: 'name',
  }
  expect(() => matchesParsedValue(extension, parsedValue)).toThrow()
})

test('category - returns false when extension is not an object', () => {
  const extension = 'not-an-object' as unknown as ExtensionListItem
  const parsedValue: ParsedExtensionSearchValue = {
    builtin: false,
    category: 'Themes',
    disabled: false,
    enabled: true,
    id: '',
    installed: false,
    isLocal: false,
    outdated: false,
    query: 'test',
    sort: 'name',
  }
  expect(matchesParsedValue(extension, parsedValue)).toBe(false)
})

test('category - returns false when extension does not have categories property', () => {
  const extension = {
    description: 'test-description',
    icon: 'test-icon',
    id: 'xyz-no-match-id',
    name: 'xyz-no-match-name',
    publisher: 'test-publisher',
    uri: 'test-uri',
  } as unknown as ExtensionListItem
  const parsedValue: ParsedExtensionSearchValue = {
    builtin: false,
    category: 'Themes',
    disabled: false,
    enabled: true,
    id: '',
    installed: false,
    isLocal: false,
    outdated: false,
    query: 'xyz-no-match-query',
    sort: 'name',
  }
  expect(matchesParsedValue(extension, parsedValue)).toBe(false)
})

test('category - returns false when categories is not an array', () => {
  const extension = {
    categories: 'not-an-array',
    description: 'test-description',
    icon: 'test-icon',
    id: 'xyz-no-match-id',
    name: 'xyz-no-match-name',
    publisher: 'test-publisher',
    uri: 'test-uri',
  } as unknown as ExtensionListItem
  const parsedValue: ParsedExtensionSearchValue = {
    builtin: false,
    category: 'Themes',
    disabled: false,
    enabled: true,
    id: '',
    installed: false,
    isLocal: false,
    outdated: false,
    query: 'xyz-no-match-query',
    sort: 'name',
  }
  expect(matchesParsedValue(extension, parsedValue)).toBe(false)
})
