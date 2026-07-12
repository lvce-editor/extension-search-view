import { ExtensionManagementWorker, RendererWorker } from '@lvce-editor/rpc-registry'
import * as ExtensionHostWorker from '../ExtensionHostWorker/ExtensionHostWorker.ts'
import * as PlatformType from '../PlatformType/PlatformType.ts'

const getDynamicWebExtensions = async (): Promise<readonly any[]> => {
  try {
    return await ExtensionManagementWorker.invoke('Extensions.getDynamicWebExtensions')
  } catch {
    return []
  }
}

export const getAllExtensions = async (platform: number): Promise<readonly any[]> => {
  if (platform === PlatformType.Web) {
    try {
      const [extensions, dynamicExtensions] = await Promise.all([ExtensionHostWorker.invoke('Extensions.getExtensions'), getDynamicWebExtensions()])
      return [...extensions, ...dynamicExtensions]
    } catch {
      return []
    }
  }
  // @ts-ignore todo
  return RendererWorker.invoke('ExtensionManagement.getAllExtensions')
}
