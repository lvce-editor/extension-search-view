import type { ExtensionListItem } from '../ExtensionListItem/ExtensionListItem.ts'

export interface State {
  readonly allExtensions: readonly ExtensionListItem[]
  readonly deltaY: number
  readonly finalDeltaY: number
  readonly focusedIndex: number
  readonly headerHeight: number
  readonly height: number
  readonly itemHeight: number
  readonly items: readonly ExtensionListItem[]
  readonly maxLineY: number
  readonly message: string
  readonly minimumSliderSize: number
  readonly minLineY: number
  readonly negativeMargin: number
  readonly placeholder: string
  readonly platform: number
  readonly scrollBarActive: boolean
  readonly scrollBarHeight: number
  readonly searchValue: string
  readonly size: number
  readonly width: number
  readonly x: number
  readonly y: number
  readonly handleOffset: number
  readonly assetDir: string
  readonly focused: boolean
  readonly inputSource: number
}
