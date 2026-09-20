import { join } from 'node:path'
import { fileURLToPath } from 'node:url'

const extensionPath = fileURLToPath(new URL('../../.tmp/dist/', import.meta.url))
process.argv.push('--link', join(extensionPath))
const linkedFixturePath = fileURLToPath(new URL('./fixtures/linked-extension/', import.meta.url))
process.argv.push('--link', join(linkedFixturePath))

await import('@lvce-editor/server/bin/server.js')
