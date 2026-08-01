import * as PlatformType from '../PlatformType/PlatformType.ts'

export const getRemoteUrl = (extension: unknown, platform: number, assetDir: string): string => {
  if (extension === null || typeof extension !== 'object') {
    return ''
  }
  const builtin = 'builtin' in extension && extension.builtin === true
  const icon = 'icon' in extension && typeof extension.icon === 'string' ? extension.icon : ''
  const id = 'id' in extension && typeof extension.id === 'string' ? extension.id : ''
  const path = 'path' in extension && typeof extension.path === 'string' ? extension.path : ''
  if (platform === PlatformType.Remote || platform === PlatformType.Electron) {
    if (builtin) {
      return `${assetDir}/extensions/${id}/${icon}`
    }
    return `/remote/${path}/${icon}` // TODO support windows paths
  }
  if (platform === PlatformType.Web) {
    return `${path}/${icon}`
  }
  return ''
}
