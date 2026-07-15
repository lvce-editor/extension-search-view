/* eslint-disable @typescript-eslint/prefer-readonly-parameter-types */
import { expect, test } from '@jest/globals'
import { getDownloadCount } from '../src/parts/GetDownloadCount/GetDownloadCount.ts'

test.each([
  [{ downloadCount: 1_234_567 }, '1,234,567'],
  [{ downloads: 50_000 }, '50,000'],
  [{ marketplace: { downloadCount: 999_999 } }, '999,999'],
  [{ marketplace: { downloads: 75_000 } }, '75,000'],
  [{ packageJSON: { downloadCount: 250_000 } }, '250,000'],
  [{ packageJSON: { downloads: 1_000_000 } }, '1,000,000'],
  [{ downloadCount: 0 }, '0'],
])('formats extension download count %#', (extension, expected) => {
  expect(getDownloadCount(extension)).toBe(expected)
})

test.each([null, undefined, {}, { downloadCount: '100' }])('returns n/a for unavailable download count %#', (extension) => {
  expect(getDownloadCount(extension)).toBe('n/a')
})
