import { measureMemory } from '@lvce-editor/measure-memory'
import { join } from 'node:path'
import { root } from './root.ts'

// Main measured 551,912 bytes and this candidate measured 553,204 bytes (Linux Chromium).
// The 1,292-byte increase is 0.23%; keep a 796-byte platform allowance.
const threshold = 554_000

const instantiations = 5_000

const instantiationsPath = join(root, 'packages', 'extension-search-view-worker')

const workerPath = join(root, '.tmp/dist/dist/extensionSearchViewWorkerMain.js')

const playwrightPath = import.meta.resolve('../../../node_modules/playwright/index.mjs')

await measureMemory({
  playwrightPath,
  workerPath,
  threshold,
  instantiations,
  instantiationsPath,
})
