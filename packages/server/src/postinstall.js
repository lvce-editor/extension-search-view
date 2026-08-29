import { cp, readFile, readdir, writeFile } from 'node:fs/promises'
import { dirname, join } from 'node:path'
import { fileURLToPath, pathToFileURL } from 'node:url'
import { patchExtensionDetailWorker } from './patchExtensionDetailWorker.js'

const __dirname = dirname(fileURLToPath(import.meta.url))

const root = join(__dirname, '..', '..', '..')

export const getRemoteUrl = (path) => {
  const url = pathToFileURL(path).toString().slice(8)
  return `/remote/${url}`
}

const staticServerPackagePath = dirname(fileURLToPath(import.meta.resolve('@lvce-editor/static-server/package.json')))
const serverStaticPath = join(staticServerPackagePath, 'static')

const RE_COMMIT_HASH = /^[a-z\d]+$/
const isCommitHash = (dirent) => {
  return dirent.length === 7 && dirent.match(RE_COMMIT_HASH)
}

const replace = (content, occurrence, replacement) => {
  return content.includes(occurrence) ? content.replace(occurrence, replacement) : content
}

const patchTestWorker = (content) => {
  // Keep the static server's compatible worker protocol and add only the newer page-object API.
  const contextMenuOccurrence = `const selectItem$1 = async text => {
  await invoke('Menu.selectItem', text);
};

const ContextMenu = {
  selectItem: selectItem$1
};`
  const contextMenuReplacement = `const selectItem$1 = async text => {
  await invoke('Menu.selectItem', text);
};
const contextMenuSelectIndex = async (level, index) => {
  await invoke('Menu.selectIndex', level, index);
};

const ContextMenu = {
  selectIndex: contextMenuSelectIndex,
  selectItem: selectItem$1
};`

  const extensionSearchOccurrence = `const open$7 = async () => {
  await open$8('Extensions');
};
const handleInput$5 = async value => {
  await invoke('Extensions.handleInput', value, Script$1);
};
const handleClick$2 = async index => {
  await invoke('Extensions.handleClick', index);
};
const handleClickFilter = async () => {
  await invoke('Extensions.handleClickFilter');
};
const handleContextMenu$4 = async (button, x, y) => {
  await invoke('Extensions.handleContextMenu', button, x, y);
};
const copyExtensionInfo = async () => {
  await invoke('Extensions.copyExtensionInfo');
};
const copyExtensionId = async () => {
  await invoke('Extensions.copyExtensionId');
};
const clearSearchResults$1 = async () => {
  await invoke('Extensions.clearSearchResults');
};
const setExtensionStatus = async (id, status) => {
  await invoke('Extensions.setExtensionStatus', id, status);
};

const ExtensionSearch = {
  clearSearchResults: clearSearchResults$1,
  copyExtensionId,
  copyExtensionInfo,
  handleClick: handleClick$2,
  handleClickFilter,
  handleContextMenu: handleContextMenu$4,
  handleInput: handleInput$5,
  open: open$7,
  setExtensionStatus
};`
  const extensionSearchReplacement = `const open$7 = async () => {
  await open$8('Extensions');
};
const extensionSearchAcceptCompletion = async () => {
  await invoke('Extensions.acceptCompletion');
};
const extensionSearchCloseSuggest = async () => {
  await invoke('Extensions.closeSuggest');
};
const extensionSearchFocusFirst = async () => {
  await invoke('Extensions.focusFirst');
};
const extensionSearchFocusLast = async () => {
  await invoke('Extensions.focusLast');
};
const extensionSearchFocusNext = async () => {
  await invoke('Extensions.focusNext');
};
const extensionSearchFocusPrevious = async () => {
  await invoke('Extensions.focusPrevious');
};
const handleInput$5 = async (value, inputSource = Script$1, cursorOffset = value.length) => {
  await invoke('Extensions.handleInput', value, inputSource, cursorOffset);
};
const extensionSearchHandleBlur = async () => {
  await invoke('Extensions.handleBlur');
};
const handleClick$2 = async index => {
  await invoke('Extensions.handleClick', index);
};
const extensionSearchHandleClickAt = async (button, eventX, eventY, name) => {
  await invoke('Extensions.handleClickAt', button, eventX, eventY, name);
};
const handleClickFilter = async () => {
  await invoke('Extensions.handleClickFilter');
};
const extensionSearchHandleSettingsButtonClick = async index => {
  await invoke('Extensions.handleSettingsButtonClick', index);
};
const extensionSearchHandleUninstall = async id => {
  await invoke('Extensions.handleUninstall', id);
};
const handleContextMenu$4 = async (button, x, y) => {
  await invoke('Extensions.handleContextMenu', button, x, y);
};
const copyExtensionInfo = async () => {
  await invoke('Extensions.copyExtensionInfo');
};
const copyExtensionId = async () => {
  await invoke('Extensions.copyExtensionId');
};
const clearSearchResults$1 = async () => {
  await invoke('Extensions.clearSearchResults');
};
const extensionSearchSelectNextCompletion = async () => {
  await invoke('Extensions.selectNextCompletion');
};
const extensionSearchSelectPreviousCompletion = async () => {
  await invoke('Extensions.selectPreviousCompletion');
};
const setExtensionStatus = async (id, status, builtin) => {
  if (builtin === undefined) {
    await invoke('Extensions.setExtensionStatus', id, status);
    return;
  }
  await invoke('Extensions.setExtensionStatus', id, status, builtin);
};

const ExtensionSearch = {
  acceptCompletion: extensionSearchAcceptCompletion,
  clearSearchResults: clearSearchResults$1,
  closeSuggest: extensionSearchCloseSuggest,
  copyExtensionId,
  copyExtensionInfo,
  focusFirst: extensionSearchFocusFirst,
  focusLast: extensionSearchFocusLast,
  focusNext: extensionSearchFocusNext,
  focusPrevious: extensionSearchFocusPrevious,
  handleBlur: extensionSearchHandleBlur,
  handleClick: handleClick$2,
  handleClickAt: extensionSearchHandleClickAt,
  handleClickFilter,
  handleContextMenu: handleContextMenu$4,
  handleInput: handleInput$5,
  handleSettingsButtonClick: extensionSearchHandleSettingsButtonClick,
  handleUninstall: extensionSearchHandleUninstall,
  open: open$7,
  selectNextCompletion: extensionSearchSelectNextCompletion,
  selectPreviousCompletion: extensionSearchSelectPreviousCompletion,
  setExtensionStatus
};`

  const layoutOccurrence = `const handleWorkspaceRefresh = async () => {
  await invoke('Layout.handleWorkspaceRefresh');
};

const Layout = {
  getSideBarPosition,
  handleWorkspaceRefresh,`
  const layoutReplacement = `const handleWorkspaceRefresh = async () => {
  await invoke('Layout.handleWorkspaceRefresh');
};
const layoutHandleExtensionsChanged = async () => {
  await execute$1('Layout.handleExtensionsChanged');
};

const Layout = {
  getSideBarPosition,
  handleExtensionsChanged: layoutHandleExtensionsChanged,
  handleWorkspaceRefresh,`

  content = replace(content, contextMenuOccurrence, contextMenuReplacement)
  content = replace(content, extensionSearchOccurrence, extensionSearchReplacement)
  return replace(content, layoutOccurrence, layoutReplacement)
}

const dirents = await readdir(serverStaticPath)
const commitHash = dirents.find(isCommitHash) || ''
const rendererWorkerMainPath = join(serverStaticPath, commitHash, 'packages', 'renderer-worker', 'dist', 'rendererWorkerMain.js')
const testWorkerMainPath = join(serverStaticPath, commitHash, 'packages', 'test-worker', 'dist', 'testWorkerMain.js')
const linkedExtensionManifestPath = join(serverStaticPath, commitHash, 'extensions', 'builtin.language-basics-html', 'extension.json')
const extensionDetailViewWorkerTargetPath = join(
  serverStaticPath,
  commitHash,
  'packages',
  'extension-detail-view-worker',
  'dist',
  'extensionDetailViewWorkerMain.js',
)

const testWorkerContent = await readFile(testWorkerMainPath, 'utf-8')
await writeFile(testWorkerMainPath, patchTestWorker(testWorkerContent))
const linkedExtensionManifest = JSON.parse(await readFile(linkedExtensionManifestPath, 'utf-8'))
await writeFile(linkedExtensionManifestPath, JSON.stringify({ ...linkedExtensionManifest, linked: true }, null, 2) + '\n')
const extensionDetailViewWorkerContent = await readFile(extensionDetailViewWorkerTargetPath, 'utf-8')
if (extensionDetailViewWorkerContent.includes('extension?.isBuiltin || extension?.builtin || false')) {
  await writeFile(extensionDetailViewWorkerTargetPath, patchExtensionDetailWorker(extensionDetailViewWorkerContent))
}

const content = await readFile(rendererWorkerMainPath, 'utf-8')

const workerPath = join(root, '.tmp/dist/dist/extensionSearchViewWorkerMain.js')

const remoteUrl = getRemoteUrl(workerPath)
if (!content.includes('// const extensionSearchViewWorkerUrl = ')) {
  await cp(rendererWorkerMainPath, rendererWorkerMainPath + '.original')
  const occurrence = `const extensionSearchViewWorkerUrl = \`\${assetDir}/packages/extension-search-view-worker/dist/extensionSearchViewWorkerMain.js\``
  const replacement = `// const extensionSearchViewWorkerUrl = \`\${assetDir}/packages/extension-search-view-worker/dist/extensionSearchViewWorkerMain.js\`
const extensionSearchViewWorkerUrl = \`${remoteUrl}\``
  const newContent = content.replace(occurrence, replacement)
  await writeFile(rendererWorkerMainPath, newContent)
}
