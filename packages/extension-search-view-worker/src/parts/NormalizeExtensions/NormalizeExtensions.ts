import * as NormalizeExtensions from '../NormalizeExtension/NormalizeExtension.ts'

export const normalizeExtension = (extensions: readonly any[]): readonly any[] => {
  return extensions.map(NormalizeExtensions.normalizeExtension)
}
