export interface State {
  readonly minLineY: number
  readonly maxLineY: number
  readonly items: readonly any[]
  readonly deltaY: number
  readonly focusedIndex: number
  readonly itemHeight: number
  readonly allExtensions: any[]
  readonly minimumSliderSize: number
  readonly height: number
  readonly scrollBarHeight: number
  readonly finalDeltaY: number
  readonly message: string
  readonly searchValue: string
  readonly placeholder: string
  readonly headerHeight: number
  readonly platform: number
}
