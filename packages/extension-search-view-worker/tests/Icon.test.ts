import { expect, test } from '@jest/globals'
import * as Icon from '../src/parts/Icon/Icon'

test('getExtensionDefaultIcon returns correct path', () => {
  const assetDir = '/test/assets'
  expect(Icon.getExtensionDefaultIcon(assetDir)).toBe(`${assetDir}/icons/extensionDefaultIcon.png`)
})

test('getExtensionLanguageBasicsIcon returns correct path', () => {
  const assetDir = '/test/assets'
  expect(Icon.getExtensionLanguageBasicsIcon(assetDir)).toBe(`${assetDir}/icons/language-icon.svg`)
})

test('getExtensionThemeIcon returns correct path', () => {
  const assetDir = '/test/assets'
  expect(Icon.getExtensionThemeIcon(assetDir)).toBe(`${assetDir}/icons/theme-icon.png`)
})
