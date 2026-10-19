import { measureMemory } from '@lvce-editor/measure-memory'
import { join } from 'node:path'
import { root } from './root.ts'

// Main baseline is 549,672 bytes on Linux; this change measured 551,900 bytes in CI.
// Keep the 2,228-byte increase within the memory gate with a small platform allowance.
const threshold = 553_000

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
