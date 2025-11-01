import { initializeExtensionHostWorker } from '../InitializeExtensionHostWorker/InitializeExtensionHostWorker.ts'

export const initialize = async (): Promise<void> => {
  await initializeExtensionHostWorker()
}
