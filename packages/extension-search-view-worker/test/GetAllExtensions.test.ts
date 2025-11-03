import { expect, test } from '@jest/globals'
import { ExtensionHost, RendererWorker } from '@lvce-editor/rpc-registry'
import * as GetAllExtensions from '../src/parts/GetAllExtensions/GetAllExtensions.ts'
import { Electron, Remote, Web } from '../src/parts/PlatformType/PlatformType.ts'

const mockExtensions = [{ name: 'Test Extension', id: 'test-extension', publisher: 'test-publisher' }]

test('returns extensions for Web platform', async () => {
  ExtensionHost.registerMockRpc({
    'Extensions.getExtensions'() {
      return mockExtensions
    },
  })
  const result = await GetAllExtensions.getAllExtensions(Web)
  expect(result).toEqual(mockExtensions)
})

test('returns empty array for Web platform when error occurs', async () => {
  ExtensionHost.registerMockRpc({
    'Extensions.getExtensions'() {
      throw new Error('test error')
    },
  })
  const result = await GetAllExtensions.getAllExtensions(Web)
  expect(result).toEqual([])
})

test('returns extensions for Remote platform', async () => {
  RendererWorker.registerMockRpc({
    'ExtensionManagement.getAllExtensions'() {
      return mockExtensions
    },
  })
  const result = await GetAllExtensions.getAllExtensions(Remote)
  expect(result).toEqual(mockExtensions)
})

test('returns extensions for Electron platform', async () => {
  RendererWorker.registerMockRpc({
    'ExtensionManagement.getAllExtensions'() {
      return mockExtensions
    },
  })
  const result = await GetAllExtensions.getAllExtensions(Electron)
  expect(result).toEqual(mockExtensions)
})
