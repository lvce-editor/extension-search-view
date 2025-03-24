import { expect, test } from '@jest/globals'
import * as GetRemoteUrl from '../src/parts/GetRemoteUrl/GetRemoteUrl.ts'
import * as PlatformType from '../src/parts/PlatformType/PlatformType.ts'

test('returns empty string for non-remote platforms', () => {
  const extension = { id: 'test', icon: 'icon.png', builtin: false }
  const assetDir = '/test/assets'
  expect(GetRemoteUrl.getRemoteUrl(extension, PlatformType.Web, assetDir)).toBe('')
})

test('returns correct path for remote builtin extension', () => {
  const extension = { id: 'test', icon: 'icon.png', builtin: true }
  const assetDir = '/test/assets'
  expect(GetRemoteUrl.getRemoteUrl(extension, PlatformType.Remote, assetDir)).toBe('/test/assets/extensions/test/icon.png')
})

test('returns correct path for remote non-builtin extension', () => {
  const extension = { id: 'test', icon: 'icon.png', builtin: false, path: 'test/path' }
  const assetDir = '/test/assets'
  expect(GetRemoteUrl.getRemoteUrl(extension, PlatformType.Remote, assetDir)).toBe('/remote/test/path/icon.png')
})

test('returns correct path for electron builtin extension', () => {
  const extension = { id: 'test', icon: 'icon.png', builtin: true }
  const assetDir = '/test/assets'
  expect(GetRemoteUrl.getRemoteUrl(extension, PlatformType.Electron, assetDir)).toBe('/test/assets/extensions/test/icon.png')
})

test('returns correct path for electron non-builtin extension', () => {
  const extension = { id: 'test', icon: 'icon.png', builtin: false, path: 'test/path' }
  const assetDir = '/test/assets'
  expect(GetRemoteUrl.getRemoteUrl(extension, PlatformType.Electron, assetDir)).toBe('/remote/test/path/icon.png')
})
