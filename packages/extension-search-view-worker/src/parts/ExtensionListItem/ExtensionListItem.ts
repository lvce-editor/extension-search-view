export interface ExtensionListItem {
  readonly builtin?: boolean
  readonly categories: readonly string[]
  readonly description: string
  readonly disabled?: boolean
  readonly downloadCount?: string
  readonly icon: string
  readonly id: string
  readonly name: string
  readonly publisher: string
  readonly rating?: string
  readonly size: number
  readonly status?: string
  readonly updatedDate: number
  readonly uri: string
}
