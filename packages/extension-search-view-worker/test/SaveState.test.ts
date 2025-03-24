import { test, expect } from '@jest/globals'
import type { State } from '../src/parts/State/State.ts'
import { saveState } from '../src/parts/SaveState/SaveState.ts'

test('saveState returns SavedState with searchValue', () => {
  const state: State = {
    allExtensions: [],
    deltaY: 0,
    finalDeltaY: 0,
    focusedIndex: 0,
    headerHeight: 0,
    height: 0,
    itemHeight: 0,
    items: [],
    maxLineY: 0,
    message: '',
    minimumSliderSize: 0,
    minLineY: 0,
    negativeMargin: 0,
    placeholder: '',
    platform: 0,
    scrollBarActive: false,
    scrollBarHeight: 0,
    searchValue: 'test search',
    size: 0,
    width: 0,
    x: 0,
    y: 0,
    handleOffset: 0,
    assetDir: '',
  }
  const result = saveState(state)
  expect(result).toEqual({
    searchValue: 'test search',
  })
})
