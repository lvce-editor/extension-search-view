import { expect, test } from '@jest/globals'
import { getStatus } from '../src/parts/GetStatus/GetStatus.ts'

test.each([null, undefined, {}, { status: 42 }])('returns an empty string when status is unavailable: %p', (extension: unknown) => {
  expect(getStatus(extension)).toBe('')
})

test('returns the extension status', () => {
  expect(getStatus({ status: 'enabled' })).toBe('enabled')
})
