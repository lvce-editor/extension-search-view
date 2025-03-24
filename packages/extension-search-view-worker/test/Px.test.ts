import { expect, test } from '@jest/globals'
import { px, position } from '../src/parts/Px/Px.ts'

test('px', () => {
  expect(px(10)).toBe('10px')
  expect(px(0)).toBe('0px')
  expect(px(-5)).toBe('-5px')
})

test('position', () => {
  expect(position(10, 20)).toBe('10px 20px')
  expect(position(0, 0)).toBe('0px 0px')
  expect(position(-5, -10)).toBe('-5px -10px')
})
