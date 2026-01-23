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

  const finalDeltaY = Math.max(400 - 200, 0) // 200
  // minLineY should be calculated from deltaY (100 / 20 = 5)
  // maxLineY should be min(minLineY + numberOfVisible, total) = min(5 + 11, 20) = 16
  const minLineY = Math.floor(100 / 20) // 5
  const maxLineY = Math.min(minLineY + 11, 20) // 16
  const scrollBarHeight = Math.max(Math.round(200 ** 2 / 400), 20) // max(100, 20) = 100
  const scrollBarY = (100 / 200) * (200 - 40 - 100) // 30

  expect(result.finalDeltaY).toBe(finalDeltaY)
  expect(result.maxLineY).toBe(maxLineY)
  expect(result.scrollBarHeight).toBe(scrollBarHeight)
  expect(result.scrollBarY).toBe(scrollBarY)
})

test('resize handles scrolled position at maximum', async () => {
  const state = {
    ...createDefaultState(),
    deltaY: 200, // scrolled to the bottom
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
  // minLineY should be calculated from deltaY (200 / 20 = 10)
  // maxLineY should be min(minLineY + numberOfVisible, total) = min(10 + 11, 20) = 20
  const minLineY = Math.floor(200 / 20) // 10
  const maxLineY = Math.min(minLineY + 11, 20) // 20
  const scrollBarHeight = Math.max(Math.round(200 ** 2 / 400), 20) // max(100, 20) = 100
  const scrollBarY = (200 / 200) * (200 - 40 - 100) // 60

  expect(result.finalDeltaY).toBe(finalDeltaY)
  expect(result.maxLineY).toBe(maxLineY)
  expect(result.scrollBarHeight).toBe(scrollBarHeight)
  expect(result.scrollBarY).toBe(scrollBarY)
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

  const finalDeltaY = Math.max(600 - 200, 0) // 400
  // minLineY should be calculated from deltaY (150 / 20 = 7.5, floored to 7)
  // maxLineY should be min(minLineY + numberOfVisible, total) = min(7 + 11, 30) = 18
  const minLineY = Math.floor(150 / 20) // 7
  const maxLineY = Math.min(minLineY + 11, 30) // 18
  const scrollBarHeight = Math.max(Math.round(200 ** 2 / 600), 20) // max(66, 20) = 66
  const scrollBarY = (150 / 400) * (200 - 40 - 66) // 34.875

  expect(result.finalDeltaY).toBe(finalDeltaY)
  expect(result.maxLineY).toBe(maxLineY)
  expect(result.scrollBarHeight).toBe(scrollBarHeight)
  expect(result.scrollBarY).toBe(scrollBarY)
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

  const finalDeltaY = Math.max(20_000 - 200, 0) // 19800
  // minLineY should be calculated from deltaY (5000 / 20 = 250)
  // maxLineY should be min(minLineY + numberOfVisible, total) = min(250 + 11, 1000) = 261
  const minLineY = Math.floor(5000 / 20) // 250
  const maxLineY = Math.min(minLineY + 11, 1000) // 261
  const scrollBarHeight = Math.max(Math.round(200 ** 2 / 20_000), 20) // max(2, 20) = 20
  const scrollBarY = (5000 / 19_800) * (200 - 40 - 20) // 45.45

  expect(result.finalDeltaY).toBe(finalDeltaY)
  expect(result.maxLineY).toBe(maxLineY)
  expect(result.scrollBarHeight).toBe(scrollBarHeight)
  expect(result.scrollBarY).toBe(scrollBarY)
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

  const finalDeltaY = Math.max(400 - 60, 0) // 340
  // minLineY should be calculated from deltaY (100 / 20 = 5)
  // maxLineY should be min(minLineY + numberOfVisible, total) = min(5 + 4, 20) = 9
  const minLineY = Math.floor(100 / 20) // 5
  const maxLineY = Math.min(minLineY + 4, 20) // 9
  const scrollBarHeight = Math.max(Math.round(60 ** 2 / 400), 20) // max(9, 20) = 20
  const scrollBarY = (100 / 340) * (60 - 40 - 20) // 5.88

  expect(result.height).toBe(60)
  expect(result.finalDeltaY).toBe(finalDeltaY)
  expect(result.maxLineY).toBe(maxLineY)
  expect(result.scrollBarHeight).toBe(scrollBarHeight)
  expect(result.scrollBarY).toBe(scrollBarY)
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
  expect(result.scrollBarY).toBe(scrollBarY)
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

  const finalDeltaY = Math.max(400 - 200, 0) // 200
  // minLineY should be calculated from deltaY (300 / 20 = 15)
  // maxLineY should be min(minLineY + numberOfVisible, total) = min(15 + 11, 20) = 20
  const minLineY = Math.floor(300 / 20) // 15
  const maxLineY = Math.min(minLineY + 11, 20) // 20
  const scrollBarHeight = Math.max(Math.round(200 ** 2 / 400), 20) // max(100, 20) = 100
  const scrollBarY = (300 / 200) * (200 - 40 - 100) // 90

  expect(result.finalDeltaY).toBe(finalDeltaY)
  expect(result.maxLineY).toBe(maxLineY)
  expect(result.scrollBarHeight).toBe(scrollBarHeight)
  expect(result.scrollBarY).toBe(scrollBarY)
})
