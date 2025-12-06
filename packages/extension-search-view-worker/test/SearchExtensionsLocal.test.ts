import { expect, test } from '@jest/globals'
import * as ParseExtensionSearchValue from '../src/parts/ParseExtensionSearchValue/ParseExtensionSearchValue.js'
import * as SearchExtensionsLocal from '../src/parts/SearchExtensionsLocal/SearchExtensionsLocal.js'

test.skip('searchExtensions - error - extension has no name, use id for filtering', async () => {
  const extensions = [
    {
      id: 'test-author.test-extension',
      main: 'main.js',
    },
  ] as any[]
  const searchValue = 'test'
  const expected = [
    {
      id: 'test-author.test-extension',
    },
  ]
  expect(await SearchExtensionsLocal.getExtensions(extensions, ParseExtensionSearchValue.parseValue(searchValue))).toMatchObject(expected)
})

test.skip('searchExtensions - error - extension has no name and no id', async () => {
  const extensions = [
    {
      main: 'main.js',
    },
  ] as any[]
  const searchValue = 'test'
  const expected: any[] = []
  expect(await SearchExtensionsLocal.getExtensions(extensions, ParseExtensionSearchValue.parseValue(searchValue))).toMatchObject(expected)
})

test.skip('searchExtensions - error - extension name is of type number', async () => {
  const extensions = [
    {
      main: 'main.js',
      name: 123,
    },
  ] as any[]
  const searchValue = 'test'
  const expected: any[] = []
  expect(await SearchExtensionsLocal.getExtensions(extensions, ParseExtensionSearchValue.parseValue(searchValue))).toMatchObject(expected)
})

test.skip('searchExtensions - error - extension id is of type number', async () => {
  const extensions = [
    {
      id: 123,
      main: 'main.js',
    },
  ] as any[]
  const searchValue = 'test'
  const expected: any[] = []
  expect(await SearchExtensionsLocal.getExtensions(extensions, ParseExtensionSearchValue.parseValue(searchValue))).toMatchObject(expected)
})

test.skip('searchExtensions - error - extension is null', async () => {
  const extensions = [null] as any[]
  const searchValue = 'test'
  const expected: any[] = []
  expect(await SearchExtensionsLocal.getExtensions(extensions, ParseExtensionSearchValue.parseValue(searchValue))).toMatchObject(expected)
})

test.skip('searchExtensions - error - extension is of type number', async () => {
  const extensions = [123] as any[]
  const searchValue = 'test'
  const expected: any[] = []
  expect(await SearchExtensionsLocal.getExtensions(extensions, ParseExtensionSearchValue.parseValue(searchValue))).toMatchObject(expected)
})

test.skip('searchExtensions - match by lowercase name', async () => {
  const extensions = [
    {
      main: 'main.js',
      name: 'Test extension',
    },
  ] as any[]
  const searchValue = 'test'
  const expected = [
    {
      name: 'Test extension',
    },
  ]
  expect(await SearchExtensionsLocal.getExtensions(extensions, ParseExtensionSearchValue.parseValue(searchValue))).toMatchObject(expected)
})
