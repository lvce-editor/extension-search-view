import { RendererWorker } from '@lvce-editor/rpc-registry'

export const setFocus = (...args: Readonly<Parameters<typeof RendererWorker.setFocus>>): ReturnType<typeof RendererWorker.setFocus> =>
  RendererWorker.setFocus(...args)
