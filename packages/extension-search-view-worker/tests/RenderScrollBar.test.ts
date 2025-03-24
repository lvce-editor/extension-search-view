import { expect, test } from '@jest/globals'
import * as RenderScrollBar from '../src/parts/RenderScrollBar/RenderScrollBar'
import * as ClassNames from '../src/parts/ClassNames/ClassNames'
import * as RenderMethod from '../src/parts/RenderMethod/RenderMethod'
import { State } from '../src/parts/State/State.ts'

const createDefaultState = (): State => ({
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
})

test('renders scrollbar with default state', () => {
  const state = createDefaultState()
  const result = RenderScrollBar.renderScrollBar(state)
  expect(result).toEqual([RenderMethod.SetScrollBar, 'position(0px, 0px)', '20px', ClassNames.ScrollBarThumb])
})

test('renders active scrollbar', () => {
  const state = { ...createDefaultState(), scrollBarActive: true }
  const result = RenderScrollBar.renderScrollBar(state)
  expect(result).toEqual([RenderMethod.SetScrollBar, 'position(0px, 0px)', '20px', `${ClassNames.ScrollBarThumb} ${ClassNames.ScrollBarThumbActive}`])
})

test('renders scrollbar with scroll position', () => {
  const state = { ...createDefaultState(), deltaY: 100, finalDeltaY: 100 }
  const result = RenderScrollBar.renderScrollBar(state)
  expect(result[0]).toBe(RenderMethod.SetScrollBar)
  expect(result[1]).toBe('position(0px, 50px)')
  expect(result[2]).toBe('20px')
  expect(result[3]).toBe(ClassNames.ScrollBarThumb)
})
