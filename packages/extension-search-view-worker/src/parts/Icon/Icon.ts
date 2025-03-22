import * as AssetDir from '../AssetDir/AssetDir.ts'

export const ExtensionDefaultIcon = `${AssetDir.assetDir}/icons/extensionDefaultIcon.png`
export const ExtensionLanguageBasics = `${AssetDir.assetDir}/icons/language-icon.svg`
export const ExtensionTheme = `${AssetDir.assetDir}/icons/theme-icon.png`

export const getExtensionDefaultIcon = (assetDir: string): string => {
  return `${assetDir}/icons/extensionDefaultIcon.png`
}

export const getExtensionLanguageBasicsIcon = (assetDir: string): string => {
  return `${assetDir}/icons/language-icon.svg`
}

export const getExtensionThemeIcon = (assetDir: string): string => {
  return `${assetDir}/icons/theme-icon.png`
}
