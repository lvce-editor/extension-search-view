export interface VisibleItem {
  readonly id: string
  readonly setSize: number
  readonly posInSet: number
  readonly top: number
  readonly focused: boolean
  readonly icon: string
  readonly name: string
  readonly description: string
  readonly publisher: string
}
