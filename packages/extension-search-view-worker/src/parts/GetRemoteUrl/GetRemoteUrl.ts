import * as AssetDir from '../AssetDir/AssetDir.ts'
import * as PlatformType from '../PlatformType/PlatformType.ts'

export const getRemoteUrl = (extension: any, platform: number): string => {
  if (platform === PlatformType.Remote || platform === PlatformType.Electron) {
    if (extension.builtin) {
      return `${AssetDir.assetDir}/extensions/${extension.id}/${extension.icon}`
    }
    return `/remote/${extension.path}/${extension.icon}` // TODO support windows paths
  }
  return ''
}
