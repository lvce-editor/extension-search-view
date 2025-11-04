import { expect, test } from '@jest/globals'
import * as ParseExtensionSearchValue from '../src/parts/ParseExtensionSearchValue/ParseExtensionSearchValue.ts'

test('parseValue - @installed', () => {
  expect(ParseExtensionSearchValue.parseValue('@installed abc')).toMatchObject({
    installed: true,
    query: ' abc',
    isLocal: true,
  })
})

test('parseValue - @enabled', () => {
  expect(ParseExtensionSearchValue.parseValue('@enabled abc')).toMatchObject({
    enabled: true,
    query: ' abc',
    isLocal: true,
  })
})

test('parseValue - @disabled', () => {
  expect(ParseExtensionSearchValue.parseValue('@disabled abc')).toMatchObject({
    disabled: true,
    query: ' abc',
    isLocal: true,
  })
})

test('parseValue - @builtin', () => {
  expect(ParseExtensionSearchValue.parseValue('@builtin')).toMatchObject({
    builtin: true,
  })
})

test('parseValue - @sort', () => {
  expect(ParseExtensionSearchValue.parseValue('@sort')).toMatchObject({
    sort: 'installs',
  })
})

test('parseValue - @id', () => {
  // TODO maybe support this syntax also
  expect(ParseExtensionSearchValue.parseValue('@id abc')).toMatchObject({
    id: '@id abc',
  })
})

test('parseValue - @id - alternative version', () => {
  expect(ParseExtensionSearchValue.parseValue('@id:abc')).toMatchObject({
    id: 'abc',
  })
})

test('parseValue - @outdated', () => {
  expect(ParseExtensionSearchValue.parseValue('@outdated')).toMatchObject({
    outdated: true,
  })
})

test('parseValue - @category', () => {
  // TODO maybe support this syntax also
  expect(ParseExtensionSearchValue.parseValue('@category themes')).toMatchObject({
    category: 'themes',
  })
})

test('parseValue - @category - alternative version', () => {
  expect(ParseExtensionSearchValue.parseValue('@category:themes')).toMatchObject({
    category: 'themes',
  })
})

test('parseValue - @category - with quotes', () => {
  expect(ParseExtensionSearchValue.parseValue('@category:"themes"')).toMatchObject({
    category: 'themes',
  })
})
