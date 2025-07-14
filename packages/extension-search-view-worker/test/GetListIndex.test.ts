import { expect, test } from '@jest/globals'
import * as GetListIndex from '../src/parts/GetListIndex/GetListIndex.ts'

test('calculates correct list index', () => {
  const eventX = 100
  const eventY = 150
  const x = 50
  const y = 100
  const deltaY = 0
  const itemHeight = 30

  const index = GetListIndex.getListIndex(eventX, eventY, x, y, deltaY, itemHeight, 0)
  expect(index).toBe(1)
})

test('handles negative deltaY', () => {
  const eventX = 100
  const eventY = 150
  const x = 50
  const y = 100
  const deltaY = -30
  const itemHeight = 30

  const index = GetListIndex.getListIndex(eventX, eventY, x, y, deltaY, itemHeight, 0)
  expect(index).toBe(0)
})

test('handles zero relative position', () => {
  const eventX = 100
  const eventY = 100
  const x = 50
  const y = 100
  const deltaY = 0
  const itemHeight = 30

  const index = GetListIndex.getListIndex(eventX, eventY, x, y, deltaY, itemHeight, 0)
  expect(index).toBe(0)
})
