import { test, expect } from '@jest/globals'
import { getDescription } from '../src/parts/GetDescription/GetDescription.ts'
import { getIcon } from '../src/parts/GetIcon/GetIcon.ts'
import { getId } from '../src/parts/GetId/GetId.ts'
import { getName } from '../src/parts/GetName/GetName.ts'
import { getSize } from '../src/parts/GetSize/GetSize.ts'
import { getVersion } from '../src/parts/GetVersion/GetVersion.ts'

const mockAssetDir = '/assets'
const mockPlatform = 1

test('returns default icon when no extension', () => {
  const result = getIcon(null, mockPlatform, mockAssetDir)
  expect(result).toBeTruthy()
})

test('returns language basics icon for language basics extension', () => {
  const extension = { name: 'Language Basics JavaScript' }
  const result = getIcon(extension, mockPlatform, mockAssetDir)
  expect(result).toBeTruthy()
})

test('returns theme icon for theme extension', () => {
  const extension = { name: 'Dark Theme' }
  const result = getIcon(extension, mockPlatform, mockAssetDir)
  expect(result).toBeTruthy()
})

test('returns remote url when extension has path and icon', () => {
  const extension = { icon: 'icon.png', path: '/path' }
  const result = getIcon(extension, mockPlatform, mockAssetDir)
  expect(result).toBe('/path/icon.png')
})

test('returns extension name when available', () => {
  const extension = { name: 'Test Extension' }
  expect(getName(extension)).toBe('Test Extension')
})

test('returns extension id when name is not available', () => {
  const extension = { id: 'test-extension' }
  expect(getName(extension)).toBe('test-extension')
})

test('returns n/a when no name or id available', () => {
  const extension = {}
  expect(getName(extension)).toBe('n/a')
})

test('returns version when available', () => {
  const extension = { version: '1.0.0' }
  expect(getVersion(extension)).toBe('1.0.0')
})

test('returns n/a when no version available', () => {
  const extension = {}
  expect(getVersion(extension)).toBe('n/a')
})

test('returns n/a when extension is null', () => {
  expect(getVersion(null)).toBe('n/a')
})

test('returns description when available', () => {
  const extension = { description: 'Test Description' }
  expect(getDescription(extension)).toBe('Test Description')
})

test('returns n/a when no description available', () => {
  const extension = {}
  expect(getDescription(extension)).toBe('n/a')
})

test('returns id when available', () => {
  const extension = { id: 'test-extension' }
  expect(getId(extension)).toBe('test-extension')
})

test('returns n/a when no id available', () => {
  const extension = {}
  expect(getId(extension)).toBe('n/a')
})

test('returns size when available', () => {
  const extension = { size: 1000 }
  expect(getSize(extension)).toBe(1000)
})

test('returns 0 when no size available', () => {
  const extension = {}
  expect(getSize(extension)).toBe(0)
})

test('returns 0 when extension is null', () => {
  expect(getSize(null)).toBe(0)
})

test('returns 0 when size is not a number', () => {
  const extension = { size: 'not a number' }
  expect(getSize(extension)).toBe(0)
})

test('returns 0 when size is undefined', () => {
  const extension = { size: undefined }
  expect(getSize(extension)).toBe(0)
})
