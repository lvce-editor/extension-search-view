import { RendererWorker } from '@lvce-editor/rpc-registry'

export const invoke = (...args: Readonly<Parameters<typeof RendererWorker.invoke>>): ReturnType<typeof RendererWorker.invoke> =>
  RendererWorker.invoke(...args)

export const openUri = (...args: Readonly<Parameters<typeof RendererWorker.openUri>>): ReturnType<typeof RendererWorker.openUri> =>
  RendererWorker.openUri(...args)

export const set = (...args: Readonly<Parameters<typeof RendererWorker.set>>): ReturnType<typeof RendererWorker.set> => RendererWorker.set(...args)

export const setFocus = (...args: Readonly<Parameters<typeof RendererWorker.setFocus>>): ReturnType<typeof RendererWorker.setFocus> =>
  RendererWorker.setFocus(...args)
