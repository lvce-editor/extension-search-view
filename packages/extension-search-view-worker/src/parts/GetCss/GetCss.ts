import type { State } from '../State/State.ts'

export const getCss = (state: State): string => {
  const { deltaY, itemHeight, scrollBarHeight, scrollBarY } = state
  const relative = -(deltaY % itemHeight)
  const roundedScrollBarY = Math.round(scrollBarY)
  return `.Extensions .ScrollBarThumb {
  height: ${scrollBarHeight}px;
  translate: 0 ${roundedScrollBarY}px;
}

.Extensions .ListItems {
  translate: 0 ${relative}px;

.ExtensionListItem {
  position: relative !important;
}
`
}
