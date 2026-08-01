export interface VisibleItem {
  readonly builtin?: boolean
  readonly description: string
  readonly disabled?: boolean
  readonly downloadCount?: string
  readonly focused: boolean
  readonly icon: string
  readonly id: string
  readonly index: number
  readonly name: string
  readonly posInSet: number
  readonly publisher: string
  readonly rating?: string
  readonly setSize: number
  readonly status?: string
  readonly top: number
}
