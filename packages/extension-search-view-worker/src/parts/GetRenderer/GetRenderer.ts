import type { Renderer } from '../Renderer/Renderer.ts'

export const getRenderer = (diffType: number): Renderer => {
  switch (diffType) {
    default:
      throw new Error('unknown renderer')
  }
}
