import type { ParsedExtensionSearchValue } from '../ParsedExtensionSearchValue/ParsedExtensionSearchValue.ts'
import * as ExtensionFilterParameter from '../ExtensionFilterParameter/ExtensionFilterParameter.ts'

const RE_PARAM = /@\w+/g

const deserializeCategory = (value: string): string => {
  if (value.startsWith(':"') && value.endsWith('"')) {
    return value.slice(2, -1)
  }
  if (value.startsWith('"') && value.endsWith('"')) {
    return value.slice(1, -1)
  }
  if (value.startsWith(':')) {
    return value.slice(1)
  }
  return value.trim()
}

// TODO test sorting and filtering
export const parseValue = (value: string): ParsedExtensionSearchValue => {
  let installed = false
  let enabled = false
  let disabled = false
  let builtin = false
  let sort = ''
  let id = ''
  let outdated = false
  let category = ''
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
      // TODO correcly parse sort order
      sort = 'installs'
    }
    if (match.startsWith(ExtensionFilterParameter.Id)) {
      // TODO improve parsing
      id = value.replace('@id:', '')
    }
    if (match.startsWith(ExtensionFilterParameter.Category)) {
      const raw = value.replace('@category', '')
      category = deserializeCategory(raw)
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
    category,
  }
}
