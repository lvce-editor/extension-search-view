import { join } from 'node:path'
import { root } from './root.ts'

// Includes the read-only component DOM inspection command.
export const threshold = 545_000

export const instantiations = 5_000

export const instantiationsPath = join(root, 'packages', 'extension-search-view-worker')

export const workerPath = join(root, '.tmp/dist/dist/extensionSearchViewWorkerMain.js')

export const playwrightPath = new URL('../../../node_modules/playwright/index.mjs', import.meta.url).toString()
