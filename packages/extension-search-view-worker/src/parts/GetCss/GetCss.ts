import type { State } from '../State/State.ts'

export const getCss = (state: State): string => {
  const { scrollBarHeight, scrollBarY } = state
  return `.Extensions .ScrollBarThumb {
  height: ${scrollBarHeight}px;
  top: ${scrollBarY}px;
}`
}
