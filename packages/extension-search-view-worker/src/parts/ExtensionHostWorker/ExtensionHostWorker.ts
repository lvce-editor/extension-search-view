import { ExtensionHost } from '@lvce-editor/rpc-registry'

export const getRuntimeStatus: typeof ExtensionHost.getRuntimeStatus = ExtensionHost.getRuntimeStatus
export const { invoke, set } = ExtensionHost
