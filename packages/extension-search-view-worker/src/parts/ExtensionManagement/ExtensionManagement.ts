import * as ExtensionHostWorker from '../ExtensionHostWorker/ExtensionHostWorker.ts'
import * as PlatformType from '../PlatformType/PlatformType.ts'
import * as RendererWorker from '../RendererWorker/RendererWorker.ts'

export const getAllExtensions = async (platform: number): Promise<readonly any[]> => {
  if (platform === PlatformType.Web) {
    try {
      const extensions = await ExtensionHostWorker.invoke('Extensions.getExtensions')
      return extensions
    } catch {
      return []
    }
  }
  // @ts-ignore todo
  return RendererWorker.invoke('ExtensionManagement.getAllExtensions')
}
