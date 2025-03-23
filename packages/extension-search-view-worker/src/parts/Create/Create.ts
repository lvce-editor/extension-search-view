import type { State } from '../State/State.ts'
import * as ExtensionSearchViewStates from '../ExtensionSearchViewStates/ExtensionSearchViewStates.ts'

export const create = (id: number, uri: string, x: number, y: number, width: number, height: number, platform: number): void => {
  const state: State = {
    searchValue: '',
    minLineY: 0,
    maxLineY: 0,
    itemHeight: 0,
    items: [],
    height,
    message: '',
    allExtensions: [],
    placeholder: '',
    platform,
    finalDeltaY: 0,
    focusedIndex: 0,
    minimumSliderSize: 0,
    deltaY: 0,
    headerHeight: 0,
    scrollBarHeight: 0,
    width,
    size: 0,
    negativeMargin: 0,
    scrollBarActive: false,
    x,
    y,
  }
  ExtensionSearchViewStates.set(id, state, state)
}
