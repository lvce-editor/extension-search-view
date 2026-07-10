import type { ExtensionAction } from '../ExtensionAction/ExtensionAction.ts'
import * as DomEventListenerFunctions from '../DomEventListenerFunctions/DomEventListenerFunctions.ts'
import * as ExtensionStatus from '../ExtensionStatus/ExtensionStatus.ts'
import * as ExtensionStrings from '../ExtensionStrings/ExtensionStrings.ts'

const install: ExtensionAction = {
  disabled: false,
  label: ExtensionStrings.install(),
  onClick: DomEventListenerFunctions.HandleInstall,
}

const installing: ExtensionAction = {
  disabled: true,
  label: ExtensionStrings.installing(),
  onClick: DomEventListenerFunctions.HandleInstall,
}

const enable: ExtensionAction = {
  disabled: false,
  label: ExtensionStrings.enable(),
  onClick: DomEventListenerFunctions.HandleEnable,
}

const disable: ExtensionAction = {
  disabled: false,
  label: ExtensionStrings.disable(),
  onClick: DomEventListenerFunctions.HandleDisable,
}

const uninstall: ExtensionAction = {
  disabled: false,
  label: ExtensionStrings.uninstall(),
  onClick: DomEventListenerFunctions.HandleUninstall,
}

const uninstalling: ExtensionAction = {
  disabled: true,
  label: ExtensionStrings.uninstalling(),
  onClick: DomEventListenerFunctions.HandleUninstall,
}

export const getExtensionActions = (builtin: boolean, disabled: boolean, status: string | undefined): readonly ExtensionAction[] => {
  if (status === ExtensionStatus.NotInstalled) {
    return [install]
  }
  if (status === ExtensionStatus.Installing) {
    return [installing]
  }
  if (status === ExtensionStatus.Uninstalling) {
    return builtin ? [] : [uninstalling]
  }
  const enableOrDisable = status === ExtensionStatus.Disabled || (status === undefined && disabled) ? enable : disable
  return builtin ? [enableOrDisable] : [enableOrDisable, uninstall]
}
