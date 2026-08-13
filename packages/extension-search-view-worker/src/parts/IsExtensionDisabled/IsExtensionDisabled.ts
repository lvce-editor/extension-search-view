import * as ExtensionStatus from '../ExtensionStatus/ExtensionStatus.ts'

export const isExtensionDisabled = (disabled: boolean, status: string | undefined): boolean => {
  return status === ExtensionStatus.Disabled || (status !== ExtensionStatus.Enabled && disabled)
}
