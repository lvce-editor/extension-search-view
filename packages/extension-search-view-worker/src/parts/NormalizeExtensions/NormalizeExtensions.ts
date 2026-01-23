import type { ExtensionListItem } from '../ExtensionListItem/ExtensionListItem.ts'
import * as NormalizeExtensions from '../NormalizeExtension/NormalizeExtension.ts'

export const normalizeExtensions = (extensions: readonly any[], platform: number, assetDir: string): readonly ExtensionListItem[] => {
  const normalized = []
  for (const extension of extensions) {
    normalized.push(NormalizeExtensions.normalizeExtension(extension, platform, assetDir))
  }
  return normalized
}
