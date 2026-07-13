import { afterEach, expect, test } from '@jest/globals'
import { ExtensionHost, RendererWorker } from '@lvce-editor/rpc-registry'
import type { State } from '../src/parts/State/State.ts'
import { clearSearchResultsWithContext } from '../src/parts/ClearSearchResults/ClearSearchResults.ts'
import { createDefaultState } from '../src/parts/CreateDefaultState/CreateDefaultState.ts'
import * as ExtensionLoading from '../src/parts/ExtensionLoading/ExtensionLoading.ts'
import * as ExtensionSearchViewStates from '../src/parts/ExtensionSearchViewStates/ExtensionSearchViewStates.ts'
import { handleInputWithContext } from '../src/parts/HandleInput/HandleInput.ts'
import * as InputSource from '../src/parts/InputSource/InputSource.ts'
import { loadContent, loadContentWithContext } from '../src/parts/LoadContent/LoadContent.ts'
import { Electron, Remote, Web } from '../src/parts/PlatformType/PlatformType.ts'

const mockExtensions = [
  {
    description: 'test-description',
    id: 'test-extension',
    name: 'Test Extension',
    publisher: 'test-publisher',
  },
]

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

test('loadContent with default state and null savedState', async () => {
  RendererWorker.registerMockRpc({
    'ExtensionManagement.getAllExtensions'() {
      return mockExtensions
    },
  })
  const state: State = {
    ...createDefaultState(),
    assetDir: '/assets',
    platform: Remote,
    width: 500,
  }
  const result = await loadContent(state, null)
  expect(result.searchValue).toBe('')
  expect(result.deltaY).toBe(0)
  expect(result.inputSource).toBe(InputSource.Script)
  expect(result.allExtensions).toHaveLength(1)
})

test('loadContent with savedState containing searchValue and deltaY', async () => {
  RendererWorker.registerMockRpc({
    'ExtensionManagement.getAllExtensions'() {
      return mockExtensions
    },
  })
  const state: State = {
    ...createDefaultState(),
    assetDir: '/assets',
    platform: Remote,
    width: 500,
  }
  const savedState = {
    deltaY: 100,
    searchValue: 'test search',
  }
  const result = await loadContent(state, savedState)
  expect(result.searchValue).toBe('test search')
  expect(result.deltaY).toBe(0)
  expect(result.inputSource).toBe(InputSource.Script)
})

test('loadContent with Web platform', async () => {
  ExtensionHost.registerMockRpc({
    'Extensions.getExtensions'() {
      return mockExtensions
    },
  })
  const state: State = {
    ...createDefaultState(),
    assetDir: '/assets',
    platform: Web,
    width: 500,
  }
  const result = await loadContent(state, null)
  expect(result.platform).toBe(Web)
  expect(result.allExtensions).toHaveLength(1)
})

test('loadContent with Electron platform', async () => {
  RendererWorker.registerMockRpc({
    'ExtensionManagement.getAllExtensions'() {
      return mockExtensions
    },
  })
  const state: State = {
    ...createDefaultState(),
    assetDir: '/assets',
    platform: Electron,
    width: 500,
  }
  const result = await loadContent(state, null)
  expect(result.platform).toBe(Electron)
  expect(result.allExtensions).toHaveLength(1)
})

test('loadContent with small width', async () => {
  RendererWorker.registerMockRpc({
    'ExtensionManagement.getAllExtensions'() {
      return mockExtensions
    },
  })
  const state: State = {
    ...createDefaultState(),
    assetDir: '/assets',
    platform: Remote,
    width: 100,
  }
  const result = await loadContent(state, null)
  expect(result.size).toBe(1)
})

test('loadContent with normal width', async () => {
  RendererWorker.registerMockRpc({
    'ExtensionManagement.getAllExtensions'() {
      return mockExtensions
    },
  })
  const state: State = {
    ...createDefaultState(),
    assetDir: '/assets',
    platform: Remote,
    width: 500,
  }
  const result = await loadContent(state, null)
  expect(result.size).toBe(2)
})

test('loadContent with large width', async () => {
  RendererWorker.registerMockRpc({
    'ExtensionManagement.getAllExtensions'() {
      return mockExtensions
    },
  })
  const state: State = {
    ...createDefaultState(),
    assetDir: '/assets',
    platform: Remote,
    width: 1000,
  }
  const result = await loadContent(state, null)
  expect(result.size).toBe(3)
})

test('loadContent with empty extensions array', async () => {
  RendererWorker.registerMockRpc({
    'ExtensionManagement.getAllExtensions'() {
      return []
    },
  })
  const state: State = {
    ...createDefaultState(),
    assetDir: '/assets',
    platform: Remote,
    width: 500,
  }
  const result = await loadContent(state, null)
  expect(result.allExtensions).toHaveLength(0)
})

test('loadContent preserves state properties', async () => {
  RendererWorker.registerMockRpc({
    'ExtensionManagement.getAllExtensions'() {
      return mockExtensions
    },
  })
  const state: State = {
    ...createDefaultState(),
    assetDir: '/custom-assets',
    height: 200,
    itemHeight: 30,
    platform: Remote,
    width: 500,
  }
  const result = await loadContent(state, null)
  expect(result.assetDir).toBe('/custom-assets')
  expect(result.height).toBe(200)
  expect(result.itemHeight).toBe(30)
  expect(result.platform).toBe(Remote)
})

test('loadContent uses increased scroll sensitivity in Firefox', async () => {
  setNavigator('Mozilla/5.0 (X11; Linux x86_64; rv:140.0) Gecko/20100101 Firefox/140.0')
  RendererWorker.registerMockRpc({
    'ExtensionManagement.getAllExtensions'() {
      return mockExtensions
    },
  })

  const result = await loadContent(
    {
      ...createDefaultState(),
      platform: Remote,
      width: 500,
    },
    null,
  )

  expect(result.scrollSensitivity).toBe(2.5)
})

test('loadContent uses normal scroll sensitivity in Chrome', async () => {
  setNavigator('Mozilla/5.0 (X11; Linux x86_64) AppleWebKit/537.36 Chrome/138.0.0.0 Safari/537.36')
  RendererWorker.registerMockRpc({
    'ExtensionManagement.getAllExtensions'() {
      return mockExtensions
    },
  })

  const result = await loadContent(
    {
      ...createDefaultState(),
      platform: Remote,
      width: 500,
    },
    null,
  )

  expect(result.scrollSensitivity).toBe(1)
})

test('loadContent preserves input made while extensions are loading', async () => {
  const { promise: extensionsRequested, resolve: notifyExtensionsRequested } = Promise.withResolvers<void>()
  const { promise: extensions, resolve: resolveExtensions } = Promise.withResolvers<typeof mockExtensions>()
  using mockRpc = RendererWorker.registerMockRpc({
    'ExtensionManagement.getAllExtensions'(): Promise<typeof mockExtensions> {
      notifyExtensionsRequested()
      return extensions
    },
  })
  const state: State = {
    ...createDefaultState(),
    initial: true,
    platform: Remote,
    uid: 1,
    width: 500,
  }
  ExtensionLoading.create(state.uid)
  ExtensionSearchViewStates.set(state.uid, state, state)
  const loadCommand = ExtensionSearchViewStates.wrapAsyncCommand(loadContentWithContext)
  const inputCommand = ExtensionSearchViewStates.wrapAsyncCommand(handleInputWithContext)

  const pendingLoad = loadCommand(state.uid, null)
  await extensionsRequested
  const pendingInput = inputCommand(state.uid, '@', InputSource.User, 1)
  resolveExtensions(mockExtensions)
  await Promise.all([pendingLoad, pendingInput])

  const { newState } = ExtensionSearchViewStates.get(state.uid)
  expect(newState.searchValue).toBe('@')
  expect(newState.suggestOpen).toBe(true)
  expect(newState.allExtensions).toHaveLength(1)
  expect(mockRpc.invocations).toEqual([['ExtensionManagement.getAllExtensions']])
})

test('loadContent preserves input made before loading starts', async () => {
  using mockRpc = RendererWorker.registerMockRpc({
    'ExtensionManagement.getAllExtensions'(): typeof mockExtensions {
      return mockExtensions
    },
  })
  const state: State = {
    ...createDefaultState(),
    initial: true,
    platform: Remote,
    uid: 3,
    width: 500,
  }
  ExtensionLoading.create(state.uid)
  ExtensionSearchViewStates.set(state.uid, state, state)
  const loadCommand = ExtensionSearchViewStates.wrapAsyncCommand(loadContentWithContext)
  const inputCommand = ExtensionSearchViewStates.wrapAsyncCommand(handleInputWithContext)

  const pendingInput = inputCommand(state.uid, '@', InputSource.User, 1)
  const pendingLoad = loadCommand(state.uid, { searchValue: 'saved search' })
  await Promise.all([pendingInput, pendingLoad])

  const { newState } = ExtensionSearchViewStates.get(state.uid)
  expect(newState.searchValue).toBe('@')
  expect(newState.suggestOpen).toBe(true)
  expect(newState.allExtensions).toHaveLength(1)
  expect(mockRpc.invocations).toEqual([['ExtensionManagement.getAllExtensions']])
})

test('loadContent does not restore saved search after clear while extensions are loading', async () => {
  const { promise: extensionsRequested, resolve: notifyExtensionsRequested } = Promise.withResolvers<void>()
  const { promise: extensions, resolve: resolveExtensions } = Promise.withResolvers<typeof mockExtensions>()
  using mockRpc = RendererWorker.registerMockRpc({
    'ExtensionManagement.getAllExtensions'(): Promise<typeof mockExtensions> {
      notifyExtensionsRequested()
      return extensions
    },
  })
  const state: State = {
    ...createDefaultState(),
    initial: true,
    platform: Remote,
    uid: 2,
    width: 500,
  }
  ExtensionLoading.create(state.uid)
  ExtensionSearchViewStates.set(state.uid, state, state)
  const loadCommand = ExtensionSearchViewStates.wrapAsyncCommand(loadContentWithContext)
  const clearCommand = ExtensionSearchViewStates.wrapAsyncCommand(clearSearchResultsWithContext)

  const pendingLoad = loadCommand(state.uid, { searchValue: 'saved search' })
  await extensionsRequested
  const pendingClear = clearCommand(state.uid)
  resolveExtensions(mockExtensions)
  await Promise.all([pendingLoad, pendingClear])

  const { newState } = ExtensionSearchViewStates.get(state.uid)
  expect(newState.searchValue).toBe('')
  expect(newState.allExtensions).toHaveLength(1)
  expect(mockRpc.invocations).toEqual([['ExtensionManagement.getAllExtensions']])
})
