import { jest, test, expect } from '@jest/globals'
import { handleBlur } from '../src/parts/HandleBlur/HandleBlur.ts'
import type { State } from '../src/parts/State/State.ts'

test('handleBlur returns state with focused set to false', () => {
  const initialState: State = {
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
    searchValue: '',
    size: 0,
    width: 0,
    x: 0,
    y: 0,
    handleOffset: 0,
    assetDir: '',
    focused: true,
    inputSource: 0,
  }

  const result = handleBlur(initialState)
  expect(result.focused).toBe(false)
})
