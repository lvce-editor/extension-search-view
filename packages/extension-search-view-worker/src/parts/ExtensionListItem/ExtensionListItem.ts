export interface ExtensionListItem {
  readonly builtin?: boolean | undefined
  readonly categories: readonly string[]
  readonly description: string
  readonly disabled?: boolean | undefined
  readonly downloadCount?: string | undefined
  readonly icon: string
  readonly id: string
  readonly linked?: boolean | undefined
  readonly name: string
  readonly publisher: string
  readonly rating?: string | undefined
  readonly size: number
  readonly status?: string | undefined
  readonly updatedDate: number
  readonly uri: string
}
