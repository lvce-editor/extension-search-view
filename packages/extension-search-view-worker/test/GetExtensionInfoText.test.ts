import { expect, test } from '@jest/globals'
import type { ExtensionListItem } from '../src/parts/ExtensionListItem/ExtensionListItem.ts'
import { getExtensionInfoText } from '../src/parts/GetExtensionInfoText/GetExtensionInfoText.ts'

test('should return formatted info text with all fields', () => {
  const extension: ExtensionListItem = {
    categories: [],
    description: 'A test extension',
    icon: 'icon.png',
    id: 'test.extension',
    name: 'Test Extension',
    publisher: 'Test Publisher',
    uri: 'https://example.com',
  }
  const result = getExtensionInfoText(extension)
  const lines = result.split('\n')
  expect(lines).toHaveLength(6)
  expect(lines[0]).toBe('Name: Test Extension')
  expect(lines[1]).toBe('Id: test.extension')
  expect(lines[2]).toBe('Description: A test extension')
  expect(lines[3]).toBe('Version:')
  expect(lines[4]).toBe('Publisher: Test Publisher')
  expect(lines[5]).toBe('Marketplace Link:')
})

test('should handle empty strings', () => {
  const extension: ExtensionListItem = {
    categories: [],
    description: '',
    icon: '',
    id: '',
    name: '',
    publisher: '',
    uri: '',
  }
  const result = getExtensionInfoText(extension)
  const lines = result.split('\n')
  expect(lines).toHaveLength(6)
  expect(lines[0]).toBe('Name:')
  expect(lines[1]).toBe('Id:')
  expect(lines[2]).toBe('Description:')
  expect(lines[3]).toBe('Version:')
  expect(lines[4]).toBe('Publisher:')
  expect(lines[5]).toBe('Marketplace Link:')
})

test('should trim trailing whitespace from formatted rows', () => {
  const extension: ExtensionListItem = {
    categories: [],
    description: '  A test extension  ',
    icon: 'icon.png',
    id: '  test.extension  ',
    name: '  Test Extension  ',
    publisher: '  Test Publisher  ',
    uri: 'https://example.com',
  }
  const result = getExtensionInfoText(extension)
  const lines = result.split('\n')
  expect(lines[0]).toBe('Name:   Test Extension')
  expect(lines[1]).toBe('Id:   test.extension')
  expect(lines[2]).toBe('Description:   A test extension')
  expect(lines[4]).toBe('Publisher:   Test Publisher')
})

test('should maintain correct order of fields', () => {
  const extension: ExtensionListItem = {
    categories: [],
    description: 'Description A',
    icon: 'icon.png',
    id: 'ext.a',
    name: 'Extension A',
    publisher: 'Publisher A',
    uri: 'https://example.com',
  }
  const result = getExtensionInfoText(extension)
  expect(result).toContain('Name: Extension A')
  expect(result).toContain('Id: ext.a')
  expect(result).toContain('Description: Description A')
  expect(result).toContain('Version:')
  expect(result).toContain('Publisher: Publisher A')
  expect(result).toContain('Marketplace Link:')
  const nameIndex = result.indexOf('Name:')
  const idIndex = result.indexOf('Id:')
  const descriptionIndex = result.indexOf('Description:')
  const versionIndex = result.indexOf('Version:')
  const publisherIndex = result.indexOf('Publisher:')
  const marketplaceLinkIndex = result.indexOf('Marketplace Link:')
  expect(nameIndex).toBeLessThan(idIndex)
  expect(idIndex).toBeLessThan(descriptionIndex)
  expect(descriptionIndex).toBeLessThan(versionIndex)
  expect(versionIndex).toBeLessThan(publisherIndex)
  expect(publisherIndex).toBeLessThan(marketplaceLinkIndex)
})
