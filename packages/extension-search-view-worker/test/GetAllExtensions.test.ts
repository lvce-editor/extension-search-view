import { expect, test } from '@jest/globals'
import { ExtensionManagementWorker } from '@lvce-editor/rpc-registry'
import * as GetAllExtensions from '../src/parts/GetAllExtensions/GetAllExtensions.ts'
import { Electron, Remote, Web } from '../src/parts/PlatformType/PlatformType.ts'

const assetDir = '/test-assets'
const mockExtensions = [{ disabled: true, id: 'test-extension', name: 'Test Extension', publisher: 'test-publisher' }]

test('returns extensions for Web platform', async () => {
  ExtensionManagementWorker.registerMockRpc({
    'Extensions.getAllExtensions'(actualAssetDir: string, platform: number) {
      expect(actualAssetDir).toBe(assetDir)
      expect(platform).toBe(Web)
      return mockExtensions
    },
  })
  const result = await GetAllExtensions.getAllExtensions(assetDir, Web)
  expect(result).toEqual(mockExtensions)
})

test('returns empty array for Web platform when error occurs', async () => {
  ExtensionManagementWorker.registerMockRpc({
    'Extensions.getAllExtensions'() {
      throw new Error('test error')
    },
  })
  const result = await GetAllExtensions.getAllExtensions(assetDir, Web)
  expect(result).toEqual([])
})

test('returns extensions for Remote platform', async () => {
  ExtensionManagementWorker.registerMockRpc({
    'Extensions.getAllExtensions'(actualAssetDir: string, platform: number) {
      expect(actualAssetDir).toBe(assetDir)
      expect(platform).toBe(Remote)
      return mockExtensions
    },
  })
  const result = await GetAllExtensions.getAllExtensions(assetDir, Remote)
  expect(result).toEqual(mockExtensions)
})

test('throws for Remote platform when error occurs', async () => {
  ExtensionManagementWorker.registerMockRpc({
    'Extensions.getAllExtensions'() {
      throw new Error('test error')
    },
  })
  await expect(GetAllExtensions.getAllExtensions(assetDir, Remote)).rejects.toThrow('test error')
})

test('returns extensions for Electron platform', async () => {
  ExtensionManagementWorker.registerMockRpc({
    'Extensions.getAllExtensions'(actualAssetDir: string, platform: number) {
      expect(actualAssetDir).toBe(assetDir)
      expect(platform).toBe(Electron)
      return mockExtensions
    },
  })
  const result = await GetAllExtensions.getAllExtensions(assetDir, Electron)
  expect(result).toEqual(mockExtensions)
})
