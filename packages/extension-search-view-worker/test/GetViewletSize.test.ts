import { expect, test } from '@jest/globals'
import * as GetViewletSize from '../src/parts/GetViewletSize/GetViewletSize.ts'
import * as ViewletSize from '../src/parts/ViewletSize/ViewletSize.ts'

test('returns Small size for width less than 180', () => {
  expect(GetViewletSize.getViewletSize(179)).toBe(ViewletSize.Small)
  expect(GetViewletSize.getViewletSize(0)).toBe(ViewletSize.Small)
})

test('returns Normal size for width between 180 and 767', () => {
  expect(GetViewletSize.getViewletSize(180)).toBe(ViewletSize.Normal)
  expect(GetViewletSize.getViewletSize(500)).toBe(ViewletSize.Normal)
  expect(GetViewletSize.getViewletSize(767)).toBe(ViewletSize.Normal)
})

test('returns Large size for width 768 or greater', () => {
  expect(GetViewletSize.getViewletSize(768)).toBe(ViewletSize.Large)
  expect(GetViewletSize.getViewletSize(1000)).toBe(ViewletSize.Large)
})
