import type { State } from '../State/State.ts'
import * as ExtensionSearchViewStates from '../ExtensionSearchViewStates/ExtensionSearchViewStates.ts'

export const create = (id: number, uri: string, x: number, y: number, width: number, height: number, platform: number, assetDir: string): void => {
  const state: State = {
    uid: id,
    allExtensions: [],
    assetDir,
    deltaY: 0,
    finalDeltaY: 0,
    focus: 0,
    focusedIndex: 0,
    handleOffset: 0,
    headerHeight: 41,
    height,
    itemHeight: 72,
    items: [],
    maxLineY: 0,
    message: '',
    minimumSliderSize: 0,
    minLineY: 0,
    negativeMargin: 0,
    placeholder: '',
    platform,
    scrollBarActive: false,
    scrollBarHeight: 0,
    searchValue: '',
    size: 0,
    width,
    x,
    y,
    focused: false,
    inputSource: 0,
    inputActions: [],
    scrollBarY: 0,
  }
  ExtensionSearchViewStates.set(id, state, state)
}
