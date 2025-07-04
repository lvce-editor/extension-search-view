import * as RendererWorker from '../RendererWorker/RendererWorker.ts'

export const openUri = async (uri: string): Promise<void> => {
  return RendererWorker.openUri(uri)
}
