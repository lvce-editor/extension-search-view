import { expect, test } from '@jest/globals'
import * as ExtensionStatus from '../src/parts/ExtensionStatus/ExtensionStatus.ts'
import { isExtensionDisabled } from '../src/parts/IsExtensionDisabled/IsExtensionDisabled.ts'

test('explicit disabled status overrides the manifest flag', () => {
  expect(isExtensionDisabled(false, ExtensionStatus.Disabled)).toBe(true)
})

test('explicit enabled status overrides the manifest flag', () => {
  expect(isExtensionDisabled(true, ExtensionStatus.Enabled)).toBe(false)
})

test('resolved manifest status preserves disabled state', () => {
  expect(isExtensionDisabled(true, 'resolved')).toBe(true)
  expect(isExtensionDisabled(false, 'resolved')).toBe(false)
})

test('missing status preserves disabled state', () => {
  expect(isExtensionDisabled(true, undefined)).toBe(true)
  expect(isExtensionDisabled(false, undefined)).toBe(false)
})
