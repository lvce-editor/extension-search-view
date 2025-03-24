import type { State } from '../State/State.ts'

export const createDefaultState = (): State => {
  return {
    allExtensions: [],
    deltaY: 0,
    finalDeltaY: 0,
    focusedIndex: 0,
    headerHeight: 0,
    height: 100,
    itemHeight: 20,
    items: Array(20).fill(null),
    maxLineY: 0,
    message: '',
    minimumSliderSize: 20,
    minLineY: 0,
    negativeMargin: 0,
    placeholder: '',
    platform: 0,
    scrollBarActive: false,
    scrollBarHeight: 0,
    searchValue: '',
    size: 0,
    width: 0,
    x: 0,
    y: 0,
    handleOffset: 0,
    assetDir: '',
    focused: false,
  }
}
