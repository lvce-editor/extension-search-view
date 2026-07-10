import { expect, test } from '@jest/globals'
import * as CreateDefaultState from '../src/parts/CreateDefaultState/CreateDefaultState.ts'
import * as SetExtensionStatus from '../src/parts/SetExtensionStatus/SetExtensionStatus.ts'

const extension = {
  categories: [],
  description: 'Test extension',
  icon: '',
  id: 'test.extension',
  name: 'Test Extension',
  publisher: 'test',
  size: 0,
  updatedDate: 0,
  uri: '',
}

test('updates matching extensions in all and filtered items', () => {
  const state = {
    ...CreateDefaultState.createDefaultState(),
    allExtensions: [extension],
    items: [extension],
  }

  const result = SetExtensionStatus.setExtensionStatus(state, 'test.extension', 'installing')

  expect(result.allExtensions[0].status).toBe('installing')
  expect(result.items[0].status).toBe('installing')
})

test('updates disabled state', () => {
  const state = {
    ...CreateDefaultState.createDefaultState(),
    allExtensions: [extension],
    items: [extension],
  }

  const disabled = SetExtensionStatus.setExtensionStatus(state, 'test.extension', 'disabled')
  const enabled = SetExtensionStatus.setExtensionStatus(disabled, 'test.extension', 'enabled')

  expect(disabled.items[0].disabled).toBe(true)
  expect(enabled.items[0].disabled).toBe(false)
})

test('can override builtin state for tests', () => {
  const builtinExtension = { ...extension, builtin: true }
  const state = {
    ...CreateDefaultState.createDefaultState(),
    allExtensions: [builtinExtension],
    items: [builtinExtension],
  }

  const result = SetExtensionStatus.setExtensionStatus(state, 'test.extension', 'enabled', false)

  expect(result.items[0].builtin).toBe(false)
})

test('rejects invalid status', () => {
  const state = CreateDefaultState.createDefaultState()
  expect(() => SetExtensionStatus.setExtensionStatus(state, 'test.extension', 'unknown')).toThrow(new TypeError('Invalid extension status: unknown'))
})
