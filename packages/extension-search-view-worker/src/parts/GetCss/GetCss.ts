import type { State } from '../State/State.ts'

export const getCss = (state: State): string => {
  const { deltaY, itemHeight, scrollBarHeight, scrollBarY } = state
  const relative = deltaY % itemHeight
  return `.Extensions .ScrollBarThumb {
  height: ${scrollBarHeight}px;
  top: ${scrollBarY}px;
}

.Extensions .ListItems {
  top: -${relative}px;

.ExtensionListItem {
  position: relative !important;
}
`
}
