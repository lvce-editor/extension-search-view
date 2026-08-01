import * as GetRemoteUrl from '../GetRemoteUrl/GetRemoteUrl.ts'
import * as Icon from '../Icon/Icon.ts'

const isLanguageBasicsExtension = (extension: object): boolean => {
  return 'name' in extension && typeof extension.name === 'string' && extension.name.startsWith('Language Basics')
}

const isThemeExtension = (extension: object): boolean => {
  return 'name' in extension && typeof extension.name === 'string' && extension.name.endsWith(' Theme')
}

export const getExtensionIcon = (extension: unknown, platform: number, assetDir: string): string => {
  if (extension === null || typeof extension !== 'object') {
    return Icon.getExtensionDefaultIcon(assetDir)
  }
  const hasIcon = 'icon' in extension && typeof extension.icon === 'string' && extension.icon
  const hasPath = 'path' in extension && typeof extension.path === 'string' && extension.path
  if (!hasPath || !hasIcon) {
    if (isLanguageBasicsExtension(extension)) {
      return Icon.getExtensionLanguageBasicsIcon(assetDir)
    }
    if (isThemeExtension(extension)) {
      return Icon.getExtensionThemeIcon(assetDir)
    }
    return Icon.getExtensionDefaultIcon(assetDir)
  }
  return GetRemoteUrl.getRemoteUrl(extension, platform, assetDir)
}
