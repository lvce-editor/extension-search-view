export interface VisibleItem {
  readonly builtin?: boolean | undefined
  readonly description: string
  readonly disabled?: boolean | undefined
  readonly downloadCount?: string | undefined
  readonly focused: boolean
  readonly icon: string
  readonly id: string
  readonly index: number
  readonly linked?: boolean | undefined
  readonly name: string
  readonly posInSet: number
  readonly publisher: string
  readonly rating?: string | undefined
  readonly setSize: number
  readonly status?: string | undefined
  readonly top: number
}
