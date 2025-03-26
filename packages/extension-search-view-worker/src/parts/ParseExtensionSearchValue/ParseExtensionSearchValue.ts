import type { ParsedExtensionSearchValue } from '../ParsedExtensionSearchValue/ParsedExtensionSearchValue.ts'
import * as ExtensionFilterParameter from '../ExtensionFilterParameter/ExtensionFilterParameter.ts'

const RE_PARAM = /@\w+/g

// TODO test sorting and filtering
export const parseValue = (value: string): ParsedExtensionSearchValue => {
  let installed = false
  let enabled = false
  let disabled = false
  let builtin = false
  let sort = ''
  let id = ''
  let outdated = false
  // TODO this is not very functional code (assignment)
  const replaced = value.replaceAll(RE_PARAM, (match, by, order) => {
    if (match.startsWith(ExtensionFilterParameter.Installed)) {
      installed = true
    }
    if (match.startsWith(ExtensionFilterParameter.Enabled)) {
      enabled = true
    }
    if (match.startsWith(ExtensionFilterParameter.Disabled)) {
      disabled = true
    }
    if (match.startsWith(ExtensionFilterParameter.Builtin)) {
      builtin = true
    }
    if (match.startsWith(ExtensionFilterParameter.Sort)) {
      // TODO
      sort = 'installs'
    }
    if (match.startsWith(ExtensionFilterParameter.Id)) {
      // TODO
      id = 'abc'
    }
    if (match.startsWith(ExtensionFilterParameter.Outdated)) {
      outdated = true
    }
    return ''
  })
  const isLocal = enabled || builtin || disabled || outdated || installed
  return {
    query: replaced,
    enabled,
    builtin,
    disabled,
    outdated,
    installed,
    id,
    sort,
    isLocal,
  }
}
