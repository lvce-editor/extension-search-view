import * as AssetDir from '../AssetDir/AssetDir.ts'
import * as Icon from '../Icon/Icon.ts'
import * as Platform from '../Platform/Platform.ts'
import * as PlatformType from '../PlatformType/PlatformType.ts'

const isLanguageBasicsExtension = (extension: any) => {
  return extension.name && extension.name.startsWith('Language Basics')
}

const isThemeExtension = (extension: any) => {
  return extension.name && extension.name.endsWith(' Theme')
}

export const getIcon = (extension: any) => {
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
  if (Platform.platform === PlatformType.Remote || Platform.platform === PlatformType.Electron) {
    if (extension.builtin) {
      return `${AssetDir.assetDir}/extensions/${extension.id}/${extension.icon}`
    }
    return `/remote/${extension.path}/${extension.icon}` // TODO support windows paths
  }
  return ''
}

const RE_PUBLISHER = /^[a-z\d\-]+/

// TODO handle case when extension is of type number|array|null|string
export const getPublisher = (extension: any) => {
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

export const getName = (extension: any) => {
  if (extension && extension.name) {
    return extension.name
  }
  if (extension && extension.id) {
    return extension.id
  }
  return 'n/a'
}

export const getVersion = (extension: any) => {
  if (!extension || !extension.version) {
    return 'n/a'
  }
  return extension.version
}

export const getDescription = (extension: any) => {
  if (!extension || !extension.description) {
    return 'n/a'
  }
  return extension.description
}

export const getId = (extension: any) => {
  if (!extension || !extension.id) {
    return 'n/a'
  }
  return extension.id
}
