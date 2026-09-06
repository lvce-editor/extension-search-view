export interface MenuEntry {
  readonly args?: readonly any[]
  readonly command: string
  readonly flags: number
  readonly id: number | string
  readonly label: string
}
