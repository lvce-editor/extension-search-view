export interface ParsedExtensionSearchValue {
  readonly builtin: boolean
  readonly category?: string
  readonly disabled: boolean
  readonly enabled: boolean
  readonly id: string
  readonly installed: boolean
  readonly isLocal: boolean
  readonly outdated: boolean
  readonly query: string
  readonly sort: string
}
