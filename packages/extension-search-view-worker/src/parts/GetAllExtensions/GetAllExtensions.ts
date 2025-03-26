import * as ExtensionManagement from '../ExtensionManagement/ExtensionManagement.ts'

export const getAllExtensions = (platform: number): Promise<readonly any[]> => {
  return ExtensionManagement.getAllExtensions(platform)
}
