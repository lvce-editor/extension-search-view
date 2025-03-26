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
