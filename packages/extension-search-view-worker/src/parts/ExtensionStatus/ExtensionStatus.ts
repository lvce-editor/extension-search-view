export const Disabled = 'disabled'
export const Enabled = 'enabled'
export const Installing = 'installing'
export const NotInstalled = 'not-installed'
export const Uninstalling = 'uninstalling'

export type ExtensionStatus = typeof Disabled | typeof Enabled | typeof Installing | typeof NotInstalled | typeof Uninstalling

const statuses: readonly string[] = [Disabled, Enabled, Installing, NotInstalled, Uninstalling]

export const isExtensionStatus = (status: string): status is ExtensionStatus => {
  return statuses.includes(status)
}
