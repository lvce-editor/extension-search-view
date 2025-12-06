import { expect, test } from '@jest/globals'
import * as GetRemoteUrl from '../src/parts/GetRemoteUrl/GetRemoteUrl.ts'
import * as PlatformType from '../src/parts/PlatformType/PlatformType.ts'

test('returns correct path for remote builtin extension', () => {
  const extension = { builtin: true, icon: 'icon.png', id: 'test' }
  const assetDir = '/test/assets'
  expect(GetRemoteUrl.getRemoteUrl(extension, PlatformType.Remote, assetDir)).toBe('/test/assets/extensions/test/icon.png')
})

test('returns correct path for remote non-builtin extension', () => {
  const extension = { builtin: false, icon: 'icon.png', id: 'test', path: 'test/path' }
  const assetDir = '/test/assets'
  expect(GetRemoteUrl.getRemoteUrl(extension, PlatformType.Remote, assetDir)).toBe('/remote/test/path/icon.png')
})

test('returns correct path for electron builtin extension', () => {
  const extension = { builtin: true, icon: 'icon.png', id: 'test' }
  const assetDir = '/test/assets'
  expect(GetRemoteUrl.getRemoteUrl(extension, PlatformType.Electron, assetDir)).toBe('/test/assets/extensions/test/icon.png')
})

test('returns correct path for electron non-builtin extension', () => {
  const extension = { builtin: false, icon: 'icon.png', id: 'test', path: 'test/path' }
  const assetDir = '/test/assets'
  expect(GetRemoteUrl.getRemoteUrl(extension, PlatformType.Electron, assetDir)).toBe('/remote/test/path/icon.png')
})

test('returns correct path for web extension', () => {
  const extension = { builtin: false, icon: 'icon.png', id: 'test', path: '/test/assets/some-extension' }
  const assetDir = '/test/assets'
  expect(GetRemoteUrl.getRemoteUrl(extension, PlatformType.Web, assetDir)).toBe('/test/assets/some-extension/icon.png')
})
