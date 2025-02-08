import * as I18nString from '../I18NString/I18NString.ts'

/**
 * @enum {string}
 */
const UiStrings = {
  NoExtensionsFound: 'No extensions found.',
  Filter: 'Filter',
  Refresh: 'Refresh',
  ClearExtensionSearchResults: 'Clear extension search results',
  Enable: 'Enable',
  Disable: 'Disable',
  Uninstall: 'Uninstall',
  InstallAnotherVersion: 'Install Another Version',
  SearchExtensionsInMarketplace: 'Search Extensions in Marketplace',
  ViewsAndMoreActions: 'Views and more Actions...',
  Extensions: 'Extensions',
  Installed: 'Installed',
}

export const noExtensionsFound = (): string => {
  return I18nString.i18nString(UiStrings.NoExtensionsFound)
}

export const filter = (): string => {
  return I18nString.i18nString(UiStrings.Filter)
}

export const refresh = (): string => {
  return I18nString.i18nString(UiStrings.Refresh)
}

export const extensions = (): string => {
  return I18nString.i18nString(UiStrings.Extensions)
}

export const clearExtensionSearchResults = (): string => {
  return I18nString.i18nString(UiStrings.ClearExtensionSearchResults)
}

export const enable = (): string => {
  return I18nString.i18nString(UiStrings.Enable)
}

export const disable = (): string => {
  return I18nString.i18nString(UiStrings.Disable)
}

export const uninstall = (): string => {
  return I18nString.i18nString(UiStrings.Uninstall)
}

export const installAnotherVersion = (): string => {
  return I18nString.i18nString(UiStrings.InstallAnotherVersion)
}

export const searchExtensionsInMarketPlace = (): string => {
  return I18nString.i18nString(UiStrings.SearchExtensionsInMarketplace)
}

export const viewsAndMoreActions = (): string => {
  return I18nString.i18nString(UiStrings.ViewsAndMoreActions)
}

export const installed = (): string => {
  return I18nString.i18nString(UiStrings.Installed)
}
