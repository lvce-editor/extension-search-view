import { join } from 'node:path'
import { fileURLToPath } from 'node:url'

const extensionPath = fileURLToPath(new URL('../../.tmp/dist/', import.meta.url))
process.argv.push('--link', join(extensionPath))
const linkedFixturePath = fileURLToPath(new URL('./fixtures/linked-extension/', import.meta.url))
process.argv.push('--link', join(linkedFixturePath))
const fixtureRoot = fileURLToPath(new URL('./fixtures/', import.meta.url))
for (const fixtureName of ['many-categories', 'long-text', 'gif-icon', 'missing-fields', 'unicode-markup']) {
  process.argv.push('--link', join(fixtureRoot, `extension-search-${fixtureName}`))
}

await import('@lvce-editor/server/bin/server.js')
