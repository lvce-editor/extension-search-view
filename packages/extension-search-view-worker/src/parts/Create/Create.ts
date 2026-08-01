import type { State } from '../State/State.ts'
import * as ExtensionLoading from '../ExtensionLoading/ExtensionLoading.ts'
import * as ExtensionSearchViewStates from '../ExtensionSearchViewStates/ExtensionSearchViewStates.ts'

export const create = (
  id: number,
  uri: string,
  x: number,
  y: number,
  width: number,
  height: number,
  platform: number,
  assetDir: string,
  parentUid?: number,
): void => {
  const state: State = {
    allExtensions: [],
    assetDir,
    completionFocusedIndex: 0,
    completionItems: [],
    cursorOffset: 0,
    deltaY: 0,
    finalDeltaY: 0,
    focus: 0,
    focused: false,
    focusedIndex: 0,
    handleOffset: 0,
    headerHeight: 41,
    height,
    initial: true,
    inputActions: [],
    inputSource: 0,
    itemHeight: 72,
    items: [],
    maxLineY: 0,
    message: '',
    minimumSliderSize: 0,
    minLineY: 0,
    negativeMargin: 0,
    parentUid,
    placeholder: '',
    platform,
    scrollBarActive: false,
    scrollBarHeight: 0,
    scrollBarY: 0,
    scrollSensitivity: 1,
    searchValue: '',
    size: 0,
    suggestOpen: false,
    uid: id,
    width,
    x,
    y,
  }
  ExtensionLoading.create(id)
  ExtensionSearchViewStates.set(id, state, state)
}
