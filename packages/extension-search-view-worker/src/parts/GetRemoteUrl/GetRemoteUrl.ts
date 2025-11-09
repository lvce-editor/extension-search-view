import * as PlatformType from '../PlatformType/PlatformType.ts'

export const getRemoteUrl = (extension: any, platform: number, assetDir: string): string => {
  if (platform === PlatformType.Remote || platform === PlatformType.Electron) {
    if (extension.builtin) {
      return `${assetDir}/extensions/${extension.id}/${extension.icon}`
    }
    return `/remote/${extension.path}/${extension.icon}` // TODO support windows paths
  }
  if (platform === PlatformType.Web) {
    return `${extension.path}/${extension.icon}`
  }
  return ''
}
