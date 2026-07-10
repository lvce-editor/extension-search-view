import { expect, test } from '@jest/globals'
import { createDefaultState } from '../src/parts/CreateDefaultState/CreateDefaultState.js'
import * as ViewletExtensionsStrings from '../src/parts/ExtensionStrings/ExtensionStrings.js'
import { handleInput } from '../src/parts/HandleInput/HandleInput.js'
import { Remote } from '../src/parts/PlatformType/PlatformType.js'

const mockExtensions = [
  {
    categories: [],
    description: 'test-description',
    icon: 'test-icon',
    id: 'test-extension',
    name: 'Test Extension',
    publisher: 'test-publisher',
    size: 1000,
    updatedDate: 1_000_000,
    uri: 'test-uri',
  },
]

const createMockExtensions = (count: number): readonly any[] => {
  return Array.from({ length: count }, (_, index) => ({
    ...mockExtensions[0],
    id: `test-extension-${index}`,
    name: `Test Extension ${index}`,
  }))
}

test('handles empty search results', async () => {
  const state = { ...createDefaultState(), allExtensions: mockExtensions, platform: Remote }
  const result = await handleInput(state, 'nonexistent')

  expect(result.items).toHaveLength(0)
  expect(result.message).toBe(ViewletExtensionsStrings.noExtensionsFound())
  expect(result.searchValue).toBe('nonexistent')
  expect(result.placeholder).toBe(ViewletExtensionsStrings.searchExtensionsInMarketPlace())
})

test('handles successful search', async () => {
  const state = { ...createDefaultState(), allExtensions: mockExtensions, platform: Remote }
  const result = await handleInput(state, 'test')

  expect(result.message).toBe('')
  expect(result.searchValue).toBe('test')
  expect(result.placeholder).toBe(ViewletExtensionsStrings.searchExtensionsInMarketPlace())
})

test('opens completions for at sign', async () => {
  const state = { ...createDefaultState(), allExtensions: mockExtensions, platform: Remote }
  const result = await handleInput(state, '@', 1, 1)

  expect(result.suggestOpen).toBe(true)
  expect(result.completionItems).toHaveLength(14)
  expect(result.cursorOffset).toBe(1)
})

test('fuzzy filters completions while typing', async () => {
  const state = { ...createDefaultState(), allExtensions: mockExtensions, platform: Remote }
  const result = await handleInput(state, '@bti', 1, 4)

  expect(result.completionItems).toEqual([{ highlights: [0, 2, 5, 7], label: '@builtin' }])
})

test('does not open completions for scripted input', async () => {
  const state = { ...createDefaultState(), allExtensions: mockExtensions, platform: Remote }
  const result = await handleInput(state, '@', 2)

  expect(result.suggestOpen).toBe(false)
})

test('uses list height when calculating scroll range', async () => {
  const state = {
    ...createDefaultState(),
    allExtensions: createMockExtensions(20),
    headerHeight: 40,
    height: 200,
    itemHeight: 20,
    minimumSliderSize: 20,
    platform: Remote,
  }

  const result = await handleInput(state, 'test')

  expect(result.finalDeltaY).toBe(240)
  expect(result.maxLineY).toBe(9)
  expect(result.scrollBarHeight).toBe(64)
})

test('handles error during search', async () => {
  const invalidExtensions = [
    {
      ...mockExtensions[0],
      get name(): string {
        throw new Error('error')
      },
    },
  ]
  const state = { ...createDefaultState(), allExtensions: invalidExtensions as any, platform: Remote }
  const result = await handleInput(state, 'test')

  expect(result.message).toBe('Failed to search for extensions: error')
  expect(result.searchValue).toBe('test')
})
