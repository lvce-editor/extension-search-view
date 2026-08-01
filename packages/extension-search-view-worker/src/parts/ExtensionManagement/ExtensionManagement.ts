import { ExtensionManagementWorker } from '@lvce-editor/rpc-registry'
import * as PlatformType from '../PlatformType/PlatformType.ts'

export const getAllExtensions = async (assetDir: string, platform: number): Promise<readonly unknown[]> => {
  try {
    return await ExtensionManagementWorker.invoke('Extensions.getAllExtensions', assetDir, platform)
  } catch (error) {
    if (platform === PlatformType.Web) {
      return []
    }
    throw error
  }
}
