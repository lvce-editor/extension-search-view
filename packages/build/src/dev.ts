import { execa } from 'execa'
import { join } from 'node:path'
import { root } from './root.ts'

const main = async (): Promise<void> => {
  await execa('npm', ['run', 'build'], {
    cwd: root,
    stdio: 'inherit',
  })
  execa(`npm`, ['run', 'build:watch'], {
    cwd: root,
    stdio: 'inherit',
  })
  execa('node', ['node_modules/@lvce-editor/server/bin/server.js', '--link', join(root, '.tmp', 'dist'), '--test-path=packages/e2e'], {
    cwd: root,
    stdio: 'inherit',
  })
}

main()
