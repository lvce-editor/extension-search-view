import { expect, test } from '@jest/globals'
import type { Dimensions } from '../src/parts/Dimensions/Dimensions.ts'
import { createDefaultState } from '../src/parts/CreateDefaultState/CreateDefaultState.ts'
import { resize } from '../src/parts/Resize/Resize.ts'

test('resize updates dimensions and calculates scroll bar properties', async () => {
  const state = {
    ...createDefaultState(),
    headerHeight: 40,
    itemHeight: 20,
    items: Array(10).fill(null),
    minimumSliderSize: 20,
  }

  const dimensions: Dimensions = {
    height: 200,
    width: 300,
    x: 10,
    y: 20,
  }

  const result = await resize(state, dimensions)

  expect(result.height).toBe(200)
  expect(result.width).toBe(300)
  expect(result.x).toBe(10)
  expect(result.y).toBe(20)
  expect(result.finalDeltaY).toBe(0) // contentHeight (200) - height (200) = 0
  expect(result.maxLineY).toBe(10) // min(numberOfVisible, total) = min(11, 10) = 10
  expect(result.scrollBarHeight).toBe(0) // size >= contentSize, so 0
  expect(result.scrollBarY).toBe(0) // finalDeltaY === 0, so 0
})

test('resize calculates scroll bar when content exceeds viewport', async () => {
  const state = {
    ...createDefaultState(),
    headerHeight: 40,
    itemHeight: 20,
    items: Array(20).fill(null),
    minimumSliderSize: 20,
  }

  const dimensions: Dimensions = {
    height: 200,
    width: 300,
    x: 0,
    y: 0,
  }

  const result = await resize(state, dimensions)

  const finalDeltaY = Math.max(400 - 200, 0) // 200
  const maxLineY = Math.min(11, 20) // 11
  const scrollBarHeight = Math.max(Math.round(200 ** 2 / 400), 20) // max(100, 20) = 100
  const scrollBarY = (0 / 200) * (200 - 40 - 100) // 0

  expect(result.height).toBe(200)
  expect(result.finalDeltaY).toBe(finalDeltaY)
  expect(result.maxLineY).toBe(maxLineY)
  expect(result.scrollBarHeight).toBe(scrollBarHeight)
  expect(result.scrollBarY).toBe(scrollBarY)
})

test('resize handles empty items list', async () => {
  const state = {
    ...createDefaultState(),
    headerHeight: 40,
    itemHeight: 20,
    items: [],
    minimumSliderSize: 20,
  }

  const dimensions: Dimensions = {
    height: 200,
    width: 300,
    x: 0,
    y: 0,
  }

  const result = await resize(state, dimensions)

  const finalDeltaY = Math.max(0 - 200, 0) // 0
  const maxLineY = Math.min(2, 0) // 0
  const scrollBarHeight = 0 // size >= contentSize
  const scrollBarY = 0 // finalDeltaY === 0

  expect(result.finalDeltaY).toBe(finalDeltaY)
  expect(result.maxLineY).toBe(maxLineY)
  expect(result.scrollBarHeight).toBe(scrollBarHeight)
  expect(result.scrollBarY).toBe(scrollBarY)
})

test('resize uses minimum slider size when calculated size is too small', async () => {
  const state = {
    ...createDefaultState(),
    headerHeight: 40,
    itemHeight: 20,
    items: Array(100).fill(null),
    minimumSliderSize: 30,
  }

  const dimensions: Dimensions = {
    height: 200,
    width: 300,
    x: 0,
    y: 0,
  }

  const result = await resize(state, dimensions)

  const calculatedSize = Math.round(200 ** 2 / 2000) // 20
  const scrollBarHeight = Math.max(calculatedSize, 30) // 30

  expect(result.scrollBarHeight).toBe(scrollBarHeight)
})

test('resize calculates scrollBarY correctly', async () => {
  const state = {
    ...createDefaultState(),
    headerHeight: 40,
    itemHeight: 20,
    items: Array(20).fill(null),
    minimumSliderSize: 20,
  }

  const dimensions: Dimensions = {
    height: 200,
    width: 300,
    x: 0,
    y: 0,
  }

  const result = await resize(state, dimensions)

  const finalDeltaY = Math.max(400 - 200, 0) // 200
  // resize always uses 0 for deltaY when calculating scrollBarY
  const scrollBarY = (0 / 200) * (200 - 40 - 100) // 0

  expect(result.finalDeltaY).toBe(finalDeltaY)
  expect(result.scrollBarY).toBe(scrollBarY)
})

test('resize preserves other state properties', async () => {
  const state = {
    ...createDefaultState(),
    focus: 1,
    focusedIndex: 5,
    headerHeight: 40,
    itemHeight: 20,
    items: Array(10).fill(null),
    minimumSliderSize: 20,
    searchValue: 'test',
  }

  const dimensions: Dimensions = {
    height: 200,
    width: 300,
    x: 0,
    y: 0,
  }

  const result = await resize(state, dimensions)

  expect(result.focus).toBe(1)
  expect(result.focusedIndex).toBe(5)
  expect(result.searchValue).toBe('test')
  expect(result.items).toEqual(state.items)
  expect(result.headerHeight).toBe(40)
  expect(result.itemHeight).toBe(20)
  expect(result.minimumSliderSize).toBe(20)
})

test('resize handles very large item lists', async () => {
  const state = {
    ...createDefaultState(),
    headerHeight: 40,
    itemHeight: 20,
    items: Array(1000).fill(null),
    minimumSliderSize: 20,
  }

  const dimensions: Dimensions = {
    height: 200,
    width: 300,
    x: 0,
    y: 0,
  }

  const result = await resize(state, dimensions)

  const finalDeltaY = Math.max(20_000 - 200, 0) // 19800
  const scrollBarHeight = Math.max(Math.round(200 ** 2 / 20_000), 20) // max(2, 20) = 20
  const maxLineY = Math.min(11, 1000) // 11

  expect(result.finalDeltaY).toBe(finalDeltaY)
  expect(result.maxLineY).toBe(maxLineY)
  expect(result.scrollBarHeight).toBe(scrollBarHeight)
})

test('resize handles small viewport', async () => {
  const state = {
    ...createDefaultState(),
    headerHeight: 40,
    itemHeight: 20,
    items: Array(10).fill(null),
    minimumSliderSize: 20,
  }

  const dimensions: Dimensions = {
    height: 60, // very small height
    width: 100,
    x: 0,
    y: 0,
  }

  const result = await resize(state, dimensions)

  const finalDeltaY = Math.max(200 - 60, 0) // 140
  const maxLineY = Math.min(4, 10) // 4
  const scrollBarHeight = Math.max(Math.round(60 ** 2 / 200), 20) // max(18, 20) = 20
  const scrollBarY = (0 / 140) * (60 - 40 - 20) // 0

  expect(result.height).toBe(60)
  expect(result.finalDeltaY).toBe(finalDeltaY)
  expect(result.maxLineY).toBe(maxLineY)
  expect(result.scrollBarHeight).toBe(scrollBarHeight)
  expect(result.scrollBarY).toBe(scrollBarY)
})
