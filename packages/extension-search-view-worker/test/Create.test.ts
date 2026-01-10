import { expect, test } from '@jest/globals'
import * as Create from '../src/parts/Create/Create.ts'
import * as ExtensionSearchViewStates from '../src/parts/ExtensionSearchViewStates/ExtensionSearchViewStates.ts'

test('create stores state with correct values', () => {
  const id = 123
  const uri = 'test-uri'
  const x = 10
  const y = 20
  const width = 800
  const height = 600
  const platform = 1
  const assetDir = '/test/assets'

  Create.create(id, uri, x, y, width, height, platform, assetDir)

  const result = ExtensionSearchViewStates.get(id)
  expect(result).toBeDefined()
  expect(result?.newState.uid).toBe(id)
  expect(result?.newState.assetDir).toBe(assetDir)
  expect(result?.newState.height).toBe(height)
  expect(result?.newState.platform).toBe(platform)
  expect(result?.newState.width).toBe(width)
  expect(result?.newState.x).toBe(x)
  expect(result?.newState.y).toBe(y)
  expect(result?.newState.headerHeight).toBe(41)
  expect(result?.newState.itemHeight).toBe(72)
  expect(result?.newState.allExtensions).toEqual([])
  expect(result?.newState.items).toEqual([])
  expect(result?.newState.inputActions).toEqual([])
  expect(result?.newState.searchValue).toBe('')
  expect(result?.newState.message).toBe('')
  expect(result?.newState.placeholder).toBe('')
  expect(result?.newState.focused).toBe(false)
  expect(result?.newState.scrollBarActive).toBe(false)
  expect(result?.newState.deltaY).toBe(0)
  expect(result?.newState.finalDeltaY).toBe(0)
  expect(result?.newState.focus).toBe(0)
  expect(result?.newState.focusedIndex).toBe(0)
  expect(result?.newState.handleOffset).toBe(0)
  expect(result?.newState.inputSource).toBe(0)
  expect(result?.newState.maxLineY).toBe(0)
  expect(result?.newState.minimumSliderSize).toBe(0)
  expect(result?.newState.minLineY).toBe(0)
  expect(result?.newState.negativeMargin).toBe(0)
  expect(result?.newState.scrollBarHeight).toBe(0)
  expect(result?.newState.scrollBarY).toBe(0)
  expect(result?.newState.size).toBe(0)
})
