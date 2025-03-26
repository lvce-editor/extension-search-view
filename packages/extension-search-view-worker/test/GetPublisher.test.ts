import { expect, test } from '@jest/globals'
import * as GetPublisher from '../src/parts/GetPublisher/GetPublisher.ts'

test('extracts publisher from valid extension id', () => {
  expect(GetPublisher.getPublisher({ id: 'publisher-name.extension-name' })).toBe('publisher-name')
  expect(GetPublisher.getPublisher({ id: 'publisher123.extension-name' })).toBe('publisher123')
  expect(GetPublisher.getPublisher({ id: 'publisher-name-123.extension-name' })).toBe('publisher-name-123')
})

test('returns n/a for invalid extension id', () => {
  expect(GetPublisher.getPublisher({ id: '123publisher.extension-name' })).toBe('n/a')
  expect(GetPublisher.getPublisher({ id: 'Publisher.extension-name' })).toBe('n/a')
  expect(GetPublisher.getPublisher({ id: 'publisher_name.extension-name' })).toBe('n/a')
})

test('returns n/a for invalid inputs', () => {
  expect(GetPublisher.getPublisher(null)).toBe('n/a')
  expect(GetPublisher.getPublisher(undefined)).toBe('n/a')
  expect(GetPublisher.getPublisher({})).toBe('n/a')
  expect(GetPublisher.getPublisher({ id: null })).toBe('n/a')
  expect(GetPublisher.getPublisher({ id: undefined })).toBe('n/a')
})
