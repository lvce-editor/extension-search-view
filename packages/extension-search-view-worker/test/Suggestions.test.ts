import { test, expect } from '@jest/globals'
import { Suggestions } from '../src/parts/Suggestions/Suggestions.ts'

test('Suggestions - should have correct suggestions', () => {
  expect(Suggestions).toEqual(['@builtin', '@disabled', '@enabled', '@installed', '@outdated', '@sort:installs', '@id:', '@category'])
})
