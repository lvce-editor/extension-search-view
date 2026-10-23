import { defineConfig } from 'eslint/config'
import * as config from '@lvce-editor/eslint-config'

export default defineConfig([
  ...config.recommendedE2e,
  ...config.default,
  ...config.recommendedTsconfig,
  ...config.recommendedVirtualDom,
  ...config.recommendedRegex,
  ...config.recommendedActions,
  {
    rules: {
      '@cspell/spellchecker': 'off',
    },
  },
  {
    files: ['packages/{e2e,e2e-integration}/**/*.ts'],
    rules: {
      '@typescript-eslint/prefer-readonly-parameter-types': 'off',
    },
  },
  {
    files: ['packages/extension-search-view-worker/test/**/*.ts'],
    rules: {
      'virtual-dom/no-inline-event-handlers': 'off',
      'virtual-dom/prefer-constants': 'off',
      'virtual-dom/prefer-merge-class-names': 'off',
    },
  },
  {
    // The pinned application supplies its own Node runtime.
    files: ['.github/workflows/integration.yml'],
    rules: { 'github-actions/node-version-file': 'off', 'github-actions/on': 'off' },
  },
  {
    // Preserve real DOM input events covered by the migrated application scenarios.
    files: [
      'packages/e2e-integration/src/viewlet.extensions-shortcut-focus.ts',
      'packages/e2e-integration/src/extension-search.disable-removes-running-extension.ts',
    ],
    rules: { '@typescript-eslint/no-deprecated': 'off' },
  },
])
