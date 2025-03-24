import { expect, test } from '@jest/globals'
import type { State } from '../src/parts/State/State.ts'
import * as RenderHeader from '../src/parts/RenderHeader/RenderHeader.ts'

test('renderHeader returns correct header dom with actions', () => {
  const state: State = {
    placeholder: 'test placeholder',
    allExtensions: [],
    deltaY: 0,
    finalDeltaY: 0,
    focusedIndex: -1,
    headerHeight: 0,
    height: 0,
    itemHeight: 0,
    items: [],
    maxLineY: 0,
    message: '',
    minimumSliderSize: 0,
    minLineY: 0,
    negativeMargin: 0,
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
  }

  const result = RenderHeader.renderHeader(state)

  expect(result[0]).toBe('setHeaderDom')
  expect(result[1]).toBeDefined()
  expect(result[1].type).toBe('header')
  expect(result[1].children).toBeDefined()
})
