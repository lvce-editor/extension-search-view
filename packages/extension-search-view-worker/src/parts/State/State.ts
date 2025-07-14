import type { ExtensionListItem } from '../ExtensionListItem/ExtensionListItem.ts'
import type { InputAction } from '../InputAction/InputAction.ts'

export interface State {
  readonly allExtensions: readonly ExtensionListItem[]
  readonly assetDir: string
  readonly deltaY: number
  readonly inputActions: readonly InputAction[]
  readonly finalDeltaY: number
  readonly focused: boolean
  readonly focusedIndex: number
  readonly handleOffset: number
  readonly headerHeight: number
  readonly height: number
  readonly inputSource: number
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
}
