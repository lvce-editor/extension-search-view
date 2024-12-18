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

export const noExtensionsFound = () => {
  return I18nString.i18nString(UiStrings.NoExtensionsFound)
}

export const filter = () => {
  return I18nString.i18nString(UiStrings.Filter)
}

export const refresh = () => {
  return I18nString.i18nString(UiStrings.Refresh)
}

export const extensions = () => {
  return I18nString.i18nString(UiStrings.Extensions)
}

export const clearExtensionSearchResults = () => {
  return I18nString.i18nString(UiStrings.ClearExtensionSearchResults)
}

export const enable = () => {
  return I18nString.i18nString(UiStrings.Enable)
}

export const disable = () => {
  return I18nString.i18nString(UiStrings.Disable)
}

export const uninstall = () => {
  return I18nString.i18nString(UiStrings.Uninstall)
}

export const installAnotherVersion = () => {
  return I18nString.i18nString(UiStrings.InstallAnotherVersion)
}

export const searchExtensionsInMarketPlace = () => {
  return I18nString.i18nString(UiStrings.SearchExtensionsInMarketplace)
}

export const viewsAndMoreActions = () => {
  return I18nString.i18nString(UiStrings.ViewsAndMoreActions)
}

export const installed = () => {
  return I18nString.i18nString(UiStrings.Installed)
}
