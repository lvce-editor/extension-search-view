import { test, expect } from '@jest/globals'
import * as ExtensionDisplay from '../src/parts/ExtensionDisplay/ExtensionDisplay.ts'

const mockAssetDir = '/assets'
const mockPlatform = 1

test('returns default icon when no extension', () => {
  const result = ExtensionDisplay.getIcon(null, mockPlatform, mockAssetDir)
  expect(result).toBeTruthy()
})

test('returns language basics icon for language basics extension', () => {
  const extension = { name: 'Language Basics JavaScript' }
  const result = ExtensionDisplay.getIcon(extension, mockPlatform, mockAssetDir)
  expect(result).toBeTruthy()
})

test('returns theme icon for theme extension', () => {
  const extension = { name: 'Dark Theme' }
  const result = ExtensionDisplay.getIcon(extension, mockPlatform, mockAssetDir)
  expect(result).toBeTruthy()
})

test('returns remote url when extension has path and icon', () => {
  const extension = { icon: 'icon.png', path: '/path' }
  const result = ExtensionDisplay.getIcon(extension, mockPlatform, mockAssetDir)
  expect(result).toBe('/path/icon.png')
})

test('returns extension name when available', () => {
  const extension = { name: 'Test Extension' }
  expect(ExtensionDisplay.getName(extension)).toBe('Test Extension')
})

test('returns extension id when name is not available', () => {
  const extension = { id: 'test-extension' }
  expect(ExtensionDisplay.getName(extension)).toBe('test-extension')
})

test('returns n/a when no name or id available', () => {
  const extension = {}
  expect(ExtensionDisplay.getName(extension)).toBe('n/a')
})

test('returns version when available', () => {
  const extension = { version: '1.0.0' }
  expect(ExtensionDisplay.getVersion(extension)).toBe('1.0.0')
})

test('returns n/a when no version available', () => {
  const extension = {}
  expect(ExtensionDisplay.getVersion(extension)).toBe('n/a')
})

test('returns n/a when extension is null', () => {
  expect(ExtensionDisplay.getVersion(null)).toBe('n/a')
})

test('returns description when available', () => {
  const extension = { description: 'Test Description' }
  expect(ExtensionDisplay.getDescription(extension)).toBe('Test Description')
})

test('returns n/a when no description available', () => {
  const extension = {}
  expect(ExtensionDisplay.getDescription(extension)).toBe('n/a')
})

test('returns id when available', () => {
  const extension = { id: 'test-extension' }
  expect(ExtensionDisplay.getId(extension)).toBe('test-extension')
})

test('returns n/a when no id available', () => {
  const extension = {}
  expect(ExtensionDisplay.getId(extension)).toBe('n/a')
})

test('returns size when available', () => {
  const extension = { size: 1000 }
  expect(ExtensionDisplay.getSize(extension)).toBe(1000)
})

test('returns 0 when no size available', () => {
  const extension = {}
  expect(ExtensionDisplay.getSize(extension)).toBe(0)
})

test('returns 0 when extension is null', () => {
  expect(ExtensionDisplay.getSize(null)).toBe(0)
})

test('returns 0 when size is not a number', () => {
  const extension = { size: 'not a number' }
  expect(ExtensionDisplay.getSize(extension)).toBe(0)
})

test('returns 0 when size is undefined', () => {
  const extension = { size: undefined }
  expect(ExtensionDisplay.getSize(extension)).toBe(0)
})
