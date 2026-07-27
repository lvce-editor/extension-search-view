import * as ExtensionManagement from '../ExtensionManagement/ExtensionManagement.ts'

export const getAllExtensions = (assetDir: string, platform: number): Promise<readonly any[]> => {
  return ExtensionManagement.getAllExtensions(assetDir, platform)
}
