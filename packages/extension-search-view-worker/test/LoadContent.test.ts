import { expect, test } from '@jest/globals'
import { ExtensionHost, RendererWorker } from '@lvce-editor/rpc-registry'
import type { State } from '../src/parts/State/State.ts'
import { createDefaultState } from '../src/parts/CreateDefaultState/CreateDefaultState.ts'
import * as InputSource from '../src/parts/InputSource/InputSource.ts'
import { loadContent } from '../src/parts/LoadContent/LoadContent.ts'
import { Electron, Remote, Web } from '../src/parts/PlatformType/PlatformType.ts'

const mockExtensions = [
  {
    description: 'test-description',
    id: 'test-extension',
    name: 'Test Extension',
    publisher: 'test-publisher',
  },
]

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
