import { getExtensionIcon } from '../GetExtensionIcon/GetExtensionIcon.ts'

export const getIcon = (extension: unknown, platform: number, assetDir: string): string => {
  return getExtensionIcon(extension, platform, assetDir)
}
