import * as RendererWorker from '../RendererWorker/RendererWorker.ts'

export const setFocus = async (focusId: number): Promise<void> => {
  await RendererWorker.invoke('Focus.setFocus', focusId)
}
