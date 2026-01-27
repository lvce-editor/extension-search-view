import { expect, test } from '@jest/globals'
import { createDefaultState } from '../src/parts/CreateDefaultState/CreateDefaultState.ts'
import * as GetCss from '../src/parts/GetCss/GetCss.ts'

test('returns CSS with correct scrollbar thumb height and position', () => {
  const state = {
    ...createDefaultState(),
    deltaY: 0,
    itemHeight: 30,
    scrollBarHeight: 100,
    scrollBarY: 50,
  }
  const result = GetCss.getCss(state)
  expect(result).toContain('height: 100px;')
  expect(result).toContain('translate: 0 50px;')
})

test('returns CSS with correct list items translate', () => {
  const state = {
    ...createDefaultState(),
    deltaY: 45,
    itemHeight: 30,
    scrollBarHeight: 100,
    scrollBarY: 50,
  }
  const result = GetCss.getCss(state)
  expect(result).toContain('margin-top: -15px;')
})

test('returns CSS with correct list items translate when deltaY is multiple of itemHeight', () => {
  const state = {
    ...createDefaultState(),
    deltaY: 60,
    itemHeight: 30,
    scrollBarHeight: 100,
    scrollBarY: 50,
  }
  const result = GetCss.getCss(state)
  expect(result).toContain('margin-top: 0px;')
})

test('returns CSS with rounded scrollBarY', () => {
  const state = {
    ...createDefaultState(),
    deltaY: 0,
    itemHeight: 30,
    scrollBarHeight: 100,
    scrollBarY: 50.7,
  }
  const result = GetCss.getCss(state)
  expect(result).toContain('translate: 0 51px;')
})

test('returns CSS with negative scrollBarY', () => {
  const state = {
    ...createDefaultState(),
    deltaY: 0,
    itemHeight: 30,
    scrollBarHeight: 100,
    scrollBarY: -20,
  }
  const result = GetCss.getCss(state)
  expect(result).toContain('translate: 0 -20px;')
})

test('returns CSS with large values', () => {
  const state = {
    ...createDefaultState(),
    deltaY: 1000,
    itemHeight: 50,
    scrollBarHeight: 500,
    scrollBarY: 250,
  }
  const result = GetCss.getCss(state)
  expect(result).toContain('height: 500px;')
  expect(result).toContain('translate: 0 250px;')
  expect(result).toContain('margin-top: 0px;')
})

test('returns CSS with fractional deltaY', () => {
  const state = {
    ...createDefaultState(),
    deltaY: 12.5,
    itemHeight: 30,
    scrollBarHeight: 100,
    scrollBarY: 50,
  }
  const result = GetCss.getCss(state)
  expect(result).toContain('margin-top: -12.5px;')
})

test('returns CSS with zero values', () => {
  const state = {
    ...createDefaultState(),
    deltaY: 0,
    itemHeight: 30,
    scrollBarHeight: 0,
    scrollBarY: 0,
  }
  const result = GetCss.getCss(state)
  expect(result).toContain('height: 0px;')
  expect(result).toContain('translate: 0 0px;')
})
