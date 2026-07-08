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
  expect(result.finalDeltaY).toBe(40) // contentHeight (200) - listHeight (160) = 40
  expect(result.maxLineY).toBe(9) // min(numberOfVisible, total) = min(9, 10) = 9
  expect(result.scrollBarHeight).toBe(128)
  expect(result.scrollBarY).toBe(0)
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

  const finalDeltaY = Math.max(400 - 160, 0) // 240
  const maxLineY = Math.min(9, 20) // 9
  const scrollBarHeight = Math.max(Math.round(160 ** 2 / 400), 20) // max(64, 20) = 64
  const scrollBarY = 0

  expect(result.height).toBe(200)
  expect(result.finalDeltaY).toBe(finalDeltaY)
  expect(result.maxLineY).toBe(maxLineY)
  expect(result.scrollBarHeight).toBe(scrollBarHeight)
  expect(result.scrollBarY).toBeCloseTo(scrollBarY, 2)
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
  expect(result.scrollBarY).toBeCloseTo(scrollBarY, 2)
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

  const finalDeltaY = Math.max(400 - 160, 0) // 240
  // resize always uses 0 for deltaY when calculating scrollBarY
  const scrollBarY = 0

  expect(result.finalDeltaY).toBe(finalDeltaY)
  expect(result.scrollBarY).toBeCloseTo(scrollBarY, 2)
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

  const finalDeltaY = Math.max(20_000 - 160, 0) // 19840
  const scrollBarHeight = Math.max(Math.round(160 ** 2 / 20_000), 20) // max(1, 20) = 20
  const maxLineY = Math.min(9, 1000) // 9

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

  const finalDeltaY = Math.max(200 - 20, 0) // 180
  const maxLineY = Math.min(2, 10) // 2
  const scrollBarHeight = Math.max(Math.round(20 ** 2 / 200), 20) // max(2, 20) = 20
  const scrollBarY = 0

  expect(result.height).toBe(60)
  expect(result.finalDeltaY).toBe(finalDeltaY)
  expect(result.maxLineY).toBe(maxLineY)
  expect(result.scrollBarHeight).toBe(scrollBarHeight)
  expect(result.scrollBarY).toBeCloseTo(scrollBarY, 2)
})

test('resize preserves scroll position when scrolled down', async () => {
  const state = {
    ...createDefaultState(),
    deltaY: 100, // scrolled down by 100 pixels
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

  const finalDeltaY = Math.max(400 - 160, 0) // 240
  // minLineY should be calculated from deltaY (100 / 20 = 5)
  // maxLineY should be min(minLineY + numberOfVisible, total) = min(5 + 9, 20) = 14
  const minLineY = Math.floor(100 / 20) // 5
  const maxLineY = Math.min(minLineY + 9, 20) // 14
  const scrollBarHeight = Math.max(Math.round(160 ** 2 / 400), 20) // max(64, 20) = 64
  const scrollBarY = (100 / 240) * (160 - 64) // 40

  expect(result.finalDeltaY).toBe(finalDeltaY)
  expect(result.maxLineY).toBe(maxLineY)
  expect(result.scrollBarHeight).toBe(scrollBarHeight)
  expect(result.scrollBarY).toBeCloseTo(scrollBarY, 2)
})

test('resize handles scrolled position at maximum', async () => {
  const state = {
    ...createDefaultState(),
    deltaY: 240, // scrolled to the bottom
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

  const finalDeltaY = Math.max(400 - 160, 0) // 240
  // minLineY should be calculated from deltaY (240 / 20 = 12)
  // maxLineY should be min(minLineY + numberOfVisible, total) = min(12 + 9, 20) = 20
  const minLineY = Math.floor(240 / 20) // 12
  const maxLineY = Math.min(minLineY + 9, 20) // 20
  const scrollBarHeight = Math.max(Math.round(160 ** 2 / 400), 20) // max(64, 20) = 64
  const scrollBarY = 160 - 64 // 96

  expect(result.finalDeltaY).toBe(finalDeltaY)
  expect(result.maxLineY).toBe(maxLineY)
  expect(result.scrollBarHeight).toBe(scrollBarHeight)
  expect(result.scrollBarY).toBeCloseTo(scrollBarY, 2)
})

test('resize handles scrolled position with partial scroll', async () => {
  const state = {
    ...createDefaultState(),
    deltaY: 150, // scrolled down by 150 pixels (7.5 items)
    headerHeight: 40,
    itemHeight: 20,
    items: Array(30).fill(null),
    minimumSliderSize: 20,
  }

  const dimensions: Dimensions = {
    height: 200,
    width: 300,
    x: 0,
    y: 0,
  }

  const result = await resize(state, dimensions)

  const finalDeltaY = Math.max(600 - 160, 0) // 440
  // minLineY should be calculated from deltaY (150 / 20 = 7.5, floored to 7)
  // maxLineY should be min(minLineY + numberOfVisible, total) = min(7 + 9, 30) = 16
  const minLineY = Math.floor(150 / 20) // 7
  const maxLineY = Math.min(minLineY + 9, 30) // 16
  const scrollBarHeight = Math.max(Math.round(160 ** 2 / 600), 20) // max(43, 20) = 43
  const scrollBarY = (150 / 440) * (160 - 43) // 39.886

  expect(result.finalDeltaY).toBe(finalDeltaY)
  expect(result.maxLineY).toBe(maxLineY)
  expect(result.scrollBarHeight).toBe(scrollBarHeight)
  expect(result.scrollBarY).toBeCloseTo(scrollBarY, 2)
})

test('resize handles scrolled position with very large list', async () => {
  const state = {
    ...createDefaultState(),
    deltaY: 5000, // scrolled down significantly
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

  const finalDeltaY = Math.max(20_000 - 160, 0) // 19840
  // minLineY should be calculated from deltaY (5000 / 20 = 250)
  // maxLineY should be min(minLineY + numberOfVisible, total) = min(250 + 9, 1000) = 259
  const minLineY = Math.floor(5000 / 20) // 250
  const maxLineY = Math.min(minLineY + 9, 1000) // 259
  const scrollBarHeight = Math.max(Math.round(160 ** 2 / 20_000), 20) // max(1, 20) = 20
  const scrollBarY = (5000 / 19_840) * (160 - 20) // 35.28

  expect(result.finalDeltaY).toBe(finalDeltaY)
  expect(result.maxLineY).toBe(maxLineY)
  expect(result.scrollBarHeight).toBe(scrollBarHeight)
  expect(result.scrollBarY).toBeCloseTo(scrollBarY, 2)
})

test('resize handles scrolled position with small viewport', async () => {
  const state = {
    ...createDefaultState(),
    deltaY: 100, // scrolled down by 100 pixels
    headerHeight: 40,
    itemHeight: 20,
    items: Array(20).fill(null),
    minimumSliderSize: 20,
  }

  const dimensions: Dimensions = {
    height: 60, // very small height
    width: 100,
    x: 0,
    y: 0,
  }

  const result = await resize(state, dimensions)

  const finalDeltaY = Math.max(400 - 20, 0) // 380
  // minLineY should be calculated from deltaY (100 / 20 = 5)
  // maxLineY should be min(minLineY + numberOfVisible, total) = min(5 + 2, 20) = 7
  const minLineY = Math.floor(100 / 20) // 5
  const maxLineY = Math.min(minLineY + 2, 20) // 7
  const scrollBarHeight = Math.max(Math.round(20 ** 2 / 400), 20) // max(1, 20) = 20
  const scrollBarY = 0

  expect(result.height).toBe(60)
  expect(result.finalDeltaY).toBe(finalDeltaY)
  expect(result.maxLineY).toBe(maxLineY)
  expect(result.scrollBarHeight).toBe(scrollBarHeight)
  expect(result.scrollBarY).toBeCloseTo(scrollBarY, 2)
})

test('resize handles scrolled position with empty items', async () => {
  const state = {
    ...createDefaultState(),
    deltaY: 100, // scrolled down (should have no effect with empty items)
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
  // minLineY should be calculated from deltaY (100 / 20 = 5)
  // maxLineY should be min(minLineY + numberOfVisible, total) = min(5 + 11, 0) = 0
  const minLineY = Math.floor(100 / 20) // 5
  const maxLineY = Math.min(minLineY + 11, 0) // 0
  const scrollBarHeight = 0 // size >= contentSize
  const scrollBarY = 0 // finalDeltaY === 0

  expect(result.finalDeltaY).toBe(finalDeltaY)
  expect(result.maxLineY).toBe(maxLineY)
  expect(result.scrollBarHeight).toBe(scrollBarHeight)
  expect(result.scrollBarY).toBeCloseTo(scrollBarY, 2)
})

test('resize handles scrolled position with deltaY exceeding finalDeltaY', async () => {
  const state = {
    ...createDefaultState(),
    deltaY: 300, // scrolled beyond the maximum possible scroll
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

  const finalDeltaY = Math.max(400 - 160, 0) // 240
  // deltaY should be clamped to finalDeltaY, then minLineY should be calculated from clamped deltaY (240 / 20 = 12)
  // maxLineY should be min(minLineY + numberOfVisible, total) = min(12 + 9, 20) = 20
  const maxLineY = Math.min(12 + 9, 20) // 20
  const scrollBarHeight = Math.max(Math.round(160 ** 2 / 400), 20) // max(64, 20) = 64
  const scrollBarY = 160 - 64 // 96

  expect(result.deltaY).toBe(finalDeltaY)
  expect(result.finalDeltaY).toBe(finalDeltaY)
  expect(result.minLineY).toBe(12)
  expect(result.maxLineY).toBe(maxLineY)
  expect(result.scrollBarHeight).toBe(scrollBarHeight)
  expect(result.scrollBarY).toBeCloseTo(scrollBarY, 2)
})

test('resize clamps scroll position when viewport grows to fit all items', async () => {
  const state = {
    ...createDefaultState(),
    deltaY: 40,
    headerHeight: 40,
    itemHeight: 20,
    items: Array(10).fill(null),
    maxLineY: 10,
    minimumSliderSize: 20,
    minLineY: 2,
  }

  const dimensions: Dimensions = {
    height: 260,
    width: 300,
    x: 0,
    y: 0,
  }

  const result = await resize(state, dimensions)

  expect(result.deltaY).toBe(0)
  expect(result.finalDeltaY).toBe(0)
  expect(result.minLineY).toBe(0)
  expect(result.maxLineY).toBe(10)
  expect(result.scrollBarHeight).toBe(0)
  expect(result.scrollBarY).toBe(0)
})
