import type { MenuEntry } from '../MenuEntry/MenuEntry.ts'
import * as ExtensionStatus from '../ExtensionStatus/ExtensionStatus.ts'
import * as ExtensionStrings from '../ExtensionStrings/ExtensionStrings.ts'
import * as MenuItemFlags from '../MenuItemFlags/MenuItemFlags.ts'

const nonEnableableStatuses: readonly string[] = [ExtensionStatus.Installing, ExtensionStatus.NotInstalled, ExtensionStatus.Uninstalling]

const getEnablementFlags = (
  disabled: boolean,
  status: string | undefined,
): {
  readonly disable: number
  readonly enable: number
} => {
  if (status && nonEnableableStatuses.includes(status)) {
    return {
      disable: MenuItemFlags.Disabled,
      enable: MenuItemFlags.Disabled,
    }
  }
  const isDisabled = status === ExtensionStatus.Disabled || (status === undefined && disabled)
  return {
    disable: isDisabled ? MenuItemFlags.Disabled : MenuItemFlags.None,
    enable: isDisabled ? MenuItemFlags.None : MenuItemFlags.Disabled,
  }
}

export const getMenuEntriesList = (builtin: boolean, disabled = false, status?: string): readonly MenuEntry[] => {
  const enablementFlags = getEnablementFlags(disabled, status)
  return [
    {
      command: 'SearchExtensions.enable',
      flags: enablementFlags.enable,
      id: 'enable',
      label: ExtensionStrings.enable(),
    },
    {
      command: 'SearchExtensions.enableWorkspace',
      flags: enablementFlags.enable,
      id: 'enableWorkspace',
      label: ExtensionStrings.enableWorkspace(),
    },
    {
      command: '',
      flags: MenuItemFlags.Separator,
      id: 'separator1',
      label: '',
    },
    {
      command: 'SearchExtensions.disable',
      flags: enablementFlags.disable,
      id: 'disable',
      label: ExtensionStrings.disable(),
    },
    {
      command: 'SearchExtensions.disableWorkspace',
      flags: enablementFlags.disable,
      id: 'disableWorkspace',
      label: ExtensionStrings.disableWorkspace(),
    },
    {
      command: '',
      flags: MenuItemFlags.Separator,
      id: 'separator2',
      label: '',
    },
    {
      command: 'SearchExtensions.installAnotherVersion',
      flags: builtin ? MenuItemFlags.Disabled : MenuItemFlags.None,
      id: 'installAnotherVersion',
      label: ExtensionStrings.installAnotherVersion(),
    },
    {
      command: 'Extensions.copyExtensionInfo',
      flags: MenuItemFlags.None,
      id: 'copy',
      label: ExtensionStrings.copy(),
    },
    {
      command: 'Extensions.copyExtensionId',
      flags: MenuItemFlags.None,
      id: 'copyExtensionId',
      label: ExtensionStrings.copyExtensionId(),
    },
  ]
}
