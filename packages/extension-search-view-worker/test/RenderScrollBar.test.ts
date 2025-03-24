import { expect, test } from '@jest/globals'
import * as ClassNames from '../src/parts/ClassNames/ClassNames.ts'
import { createDefaultState } from '../src/parts/CreateDefaultState/CreateDefaultState.ts'
import * as RenderMethod from '../src/parts/RenderMethod/RenderMethod.ts'
import * as RenderScrollBar from '../src/parts/RenderScrollBar/RenderScrollBar.ts'

test('renders scrollbar with default state', () => {
  const state = createDefaultState()
  const result = RenderScrollBar.renderScrollBar(state)
  expect(result).toEqual([RenderMethod.SetScrollBar, 'position(0px, 0px)', '20px', ClassNames.ScrollBarThumb])
})

test('renders active scrollbar', () => {
  const state = { ...createDefaultState(), scrollBarActive: true }
  const result = RenderScrollBar.renderScrollBar(state)
  expect(result).toEqual([RenderMethod.SetScrollBar, '0px, NaNpx', '25px', `${ClassNames.ScrollBarThumb} ${ClassNames.ScrollBarThumbActive}`])
})

test('renders scrollbar with scroll position', () => {
  const state = { ...createDefaultState(), deltaY: 100, finalDeltaY: 100 }
  const result = RenderScrollBar.renderScrollBar(state)
  expect(result[0]).toBe(RenderMethod.SetScrollBar)
  expect(result[1]).toBe('0px 75px')
  expect(result[2]).toBe('25px')
  expect(result[3]).toBe(ClassNames.ScrollBarThumb)
})
