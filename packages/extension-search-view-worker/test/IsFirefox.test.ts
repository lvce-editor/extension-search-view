import { afterEach, expect, test } from '@jest/globals'
import { getIsFirefox } from '../src/parts/IsFirefox/IsFirefox.ts'

const originalNavigatorDescriptor = Object.getOwnPropertyDescriptor(globalThis, 'navigator')

const setNavigator = (userAgent: string): void => {
  Object.defineProperty(globalThis, 'navigator', {
    configurable: true,
    value: {
      userAgent,
    },
  })
}

afterEach(() => {
  if (originalNavigatorDescriptor) {
    Object.defineProperty(globalThis, 'navigator', originalNavigatorDescriptor)
    return
  }
  // @ts-expect-error
  delete globalThis.navigator
})

test('returns false when navigator is unavailable', () => {
  // @ts-expect-error
  delete globalThis.navigator

  expect(getIsFirefox()).toBe(false)
})

test('returns true for Firefox', () => {
  setNavigator('Mozilla/5.0 (X11; Linux x86_64; rv:140.0) Gecko/20100101 Firefox/140.0')

  expect(getIsFirefox()).toBe(true)
})

test('returns false for Chrome', () => {
  setNavigator('Mozilla/5.0 (X11; Linux x86_64) AppleWebKit/537.36 Chrome/138.0.0.0 Safari/537.36')

  expect(getIsFirefox()).toBe(false)
})
