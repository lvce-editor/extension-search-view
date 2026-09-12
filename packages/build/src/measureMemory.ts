import { measureMemory } from '@lvce-editor/measure-memory'
import { join } from 'node:path'
import { root } from './root.ts'

// Includes component DOM inspection and state destructuring (545,012 bytes on macOS).
const threshold = 545_100

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
