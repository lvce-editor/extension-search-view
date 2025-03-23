import * as ParentRpc from '../ParentRpc/ParentRpc.ts'
import * as PlatformType from '../PlatformType/PlatformType.ts'

export const getAllExtensions = async (platform: number): Promise<readonly any[]> => {
  if (platform === PlatformType.Web) {
    return []
  }
  return ParentRpc.invoke('ExtensionManagement.getAllExtensions')
}
