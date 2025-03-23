import * as GetRemoteUrl from '../GetRemoteUrl/GetRemoteUrl.ts'
import * as Icon from '../Icon/Icon.ts'

const isLanguageBasicsExtension = (extension: any): boolean => {
  return extension.name && extension.name.startsWith('Language Basics')
}

const isThemeExtension = (extension: any): string => {
  return extension.name && extension.name.endsWith(' Theme')
}

export const getIcon = (extension: any, platform: number, assetDir: string): string => {
  if (!extension) {
    return Icon.ExtensionDefaultIcon
  }
  if (!extension.path || !extension.icon) {
    if (isLanguageBasicsExtension(extension)) {
      return Icon.ExtensionLanguageBasics
    }
    if (isThemeExtension(extension)) {
      return Icon.ExtensionTheme
    }
    return Icon.ExtensionDefaultIcon
  }
  return GetRemoteUrl.getRemoteUrl(extension, platform, assetDir)
}

export const getName = (extension: any): string => {
  if (extension && extension.name) {
    return extension.name
  }
  if (extension && extension.id) {
    return extension.id
  }
  return 'n/a'
}

export const getVersion = (extension: any): string => {
  if (!extension || !extension.version) {
    return 'n/a'
  }
  return extension.version
}

export const getDescription = (extension: any): string => {
  if (!extension || !extension.description) {
    return 'n/a'
  }
  return extension.description
}

export const getId = (extension: any): string => {
  if (!extension || !extension.id) {
    return 'n/a'
  }
  return extension.id
}
