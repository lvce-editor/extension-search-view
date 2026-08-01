import * as ExtensionManagement from '../ExtensionManagement/ExtensionManagement.ts'

export const getAllExtensions = (assetDir: string, platform: number): Promise<readonly unknown[]> => {
  return ExtensionManagement.getAllExtensions(assetDir, platform)
}
