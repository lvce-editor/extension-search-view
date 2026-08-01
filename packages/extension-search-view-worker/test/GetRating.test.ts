/* eslint-disable @typescript-eslint/prefer-readonly-parameter-types */
import { expect, test } from '@jest/globals'
import { getRating } from '../src/parts/GetRating/GetRating.ts'

test.each([
  [{ rating: 4.567 }, '4.6'],
  [{ averageRating: 3.2 }, '3.2'],
  [{ marketplace: { rating: 4.8 } }, '4.8'],
  [{ marketplace: { averageRating: 2.9 } }, '2.9'],
  [{ packageJSON: { rating: 5 } }, '5.0'],
  [{ packageJSON: { averageRating: 1.5 } }, '1.5'],
  [{ rating: 0 }, '0.0'],
])('formats extension rating %#', (extension, expected) => {
  expect(getRating(extension)).toBe(expected)
})

test.each([null, undefined, {}, { rating: '5' }])('returns n/a for unavailable rating %#', (extension) => {
  expect(getRating(extension)).toBe('n/a')
})
