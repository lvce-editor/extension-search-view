import { getExtensionIcon } from '../GetExtensionIcon/GetExtensionIcon.ts'

export const getIcon = (extension: any, platform: number, assetDir: string): string => {
  return getExtensionIcon(extension, platform, assetDir)
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

export const getSize = (extension: any): number => {
  if (!extension || extension.size === 0 || typeof extension.size !== 'number') {
    return 0
  }
  return extension.size
}

export const getUpdatedDate = (extension: any): number => {
  if (!extension || !extension.updatedDate || typeof extension.updatedDate !== 'number') {
    return 0
  }
  return extension.updatedDate
}

const isString = (item: unknown): item is string => {
  return typeof item === 'string'
}

export const getCategories = (extension: any): readonly string[] => {
  if (!extension || !extension.categories || !Array.isArray(extension.categories)) {
    return []
  }
  return extension.categories.filter(isString)
}
