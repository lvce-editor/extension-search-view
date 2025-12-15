import { initializeExtensionHostWorker } from '../InitializeExtensionHostWorker/InitializeExtensionHostWorker.ts'
import { initializeExtensionManagementWorker } from '../InitializeExtensionManagementWorker/InitializeExtensionManagementWorker.ts'

export const initialize = async (): Promise<void> => {
  await Promise.all([initializeExtensionHostWorker(), initializeExtensionManagementWorker()])
}
