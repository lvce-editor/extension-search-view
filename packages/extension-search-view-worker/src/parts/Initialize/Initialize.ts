import { initializeExtensionManagementWorker } from '../InitializeExtensionManagementWorker/InitializeExtensionManagementWorker.ts'

export const initialize = async (): Promise<void> => {
  await initializeExtensionManagementWorker()
}
