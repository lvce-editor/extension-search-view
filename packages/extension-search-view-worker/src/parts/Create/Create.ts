import type { State } from '../State/State.ts'
import { set } from '../ExtensionSearchViewStates/ExtensionSearchViewStates.ts'
import * as Platform from '../Platform/Platform.js'

export const create = (id: number, uri: string, x: number, y: number, width: number, height: number): void => {
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
    platform: Platform.platform,
    finalDeltaY: 0,
    focusedIndex: 0,
    minimumSliderSize: 0,
    deltaY: 0,
    headerHeight: 0,
    scrollBarHeight: 0,
  }
  set(id, state, state)
}
