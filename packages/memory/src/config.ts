import { join } from 'node:path'
import { root } from './root.ts'

// Includes component DOM inspection and state destructuring (545,012 bytes on macOS).
export const threshold = 545_100

export const instantiations = 5_000

export const instantiationsPath = join(root, 'packages', 'extension-search-view-worker')

export const workerPath = join(root, '.tmp/dist/dist/extensionSearchViewWorkerMain.js')

export const playwrightPath = new URL('../../../node_modules/playwright/index.mjs', import.meta.url).toString()
