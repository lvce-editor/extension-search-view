import type { State } from '../State/State.ts'

export const getCss = (state: State): string => {
  const { deltaY, itemHeight, scrollBarHeight, scrollBarY } = state
  const relative = -(deltaY % itemHeight)
  const roundedScrollBarY = Math.round(scrollBarY)
  return `.Extensions .ScrollBarThumb {
  height: ${scrollBarHeight}px;
  translate: 0 ${roundedScrollBarY}px;
}


/* TODO: avoid using negative margin. find a better way*/
.ExtensionListItem:nth-child(1) {
  margin-top: ${relative}px;
}

.ExtensionListItem {
  position: relative !important;
  flex-shrink: 0;
}

.Extensions .ListItems {
  display: flex;
  flex-direction: column;
  gap: 0;
  overflow-y: hidden;
}
`
}
