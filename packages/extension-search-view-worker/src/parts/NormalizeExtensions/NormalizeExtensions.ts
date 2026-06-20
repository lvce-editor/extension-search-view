import type { ExtensionListItem } from '../ExtensionListItem/ExtensionListItem.ts'
import * as NormalizeExtensions from '../NormalizeExtension/NormalizeExtension.ts'

export const normalizeExtensions = (extensions: readonly any[], platform: number, assetDir: string): readonly ExtensionListItem[] => {
  return Array.from(extensions, (extension) => NormalizeExtensions.normalizeExtension(extension, platform, assetDir))
}
