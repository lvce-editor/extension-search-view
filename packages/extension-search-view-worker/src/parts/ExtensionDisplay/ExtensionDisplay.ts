import * as GetRemoteUrl from '../GetRemoteUrl/GetRemoteUrl.ts'
import * as Icon from '../Icon/Icon.ts'

const isLanguageBasicsExtension = (extension: any): boolean => {
  return extension.name && extension.name.startsWith('Language Basics')
}

const isThemeExtension = (extension: any): string => {
  return extension.name && extension.name.endsWith(' Theme')
}

export const getIcon = (extension: any, platform: number): string => {
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
  return GetRemoteUrl.getRemoteUrl(extension, platform)
}

const RE_PUBLISHER = /^[a-z\d-]+/

// TODO handle case when extension is of type number|array|null|string
export const getPublisher = (extension: any): string => {
  if (!extension || !extension.id) {
    return 'n/a'
  }
  // TODO handle case when id is not of type string -> should not crash application
  const match = extension.id.match(RE_PUBLISHER)
  if (!match) {
    return 'n/a'
  }
  return match[0]
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
