export interface ParsedExtensionSearchValue {
  readonly installed: boolean
  readonly enabled: boolean
  readonly disabled: boolean
  readonly builtin: boolean
  readonly sort: string
  readonly id: string
  readonly outdated: boolean
  readonly query: string
  readonly isLocal: boolean
  readonly category?: string
}
