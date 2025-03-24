import { expect, test } from '@jest/globals'
import * as Px from '../src/parts/Px/Px.ts'

test('px converts number to pixel string', () => {
  expect(Px.px(0)).toBe('0px')
  expect(Px.px(100)).toBe('100px')
  expect(Px.px(-50)).toBe('-50px')
  expect(Px.px(1.5)).toBe('1.5px')
})
