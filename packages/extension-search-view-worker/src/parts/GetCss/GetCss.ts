import type { State } from '../State/State.ts'

export const getCss = (state: State): string => {
  const { cursorOffset, deltaY, headerHeight, itemHeight, scrollBarHeight, scrollBarY, width } = state
  const relative = -(deltaY % itemHeight)
  const roundedScrollBarY = Math.round(scrollBarY)
  const maximumCompletionLeft = Math.max(8, width - 168)
  const completionLeft = Math.min(Math.round(8 + cursorOffset * 7.5), maximumCompletionLeft)
  const completionTop = Math.max(0, headerHeight - 10)
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

.ExtensionHeader {
  contain: layout style;
  position: relative;
  z-index: 1;
}

.ExtensionListItemFooter {
  justify-content: flex-end;
  padding-right: 2px;
}

.ExtensionListItemAuthorName {
  flex: 1;
}

.ExtensionActions {
  display: flex;
  gap: 6px;
}

.ExtensionActionButton {
  padding: 0 5px;
}

.ExtensionSearchCompletionWidget {
  position: absolute;
  left: ${completionLeft}px;
  top: ${completionTop}px;
  width: min(320px, calc(100% - ${completionLeft + 8}px));
  max-height: 240px;
  overflow-y: auto;
  z-index: 10;
  box-sizing: border-box;
  border: 1px solid var(--CompletionListBorder, #95a29d);
  background: var(--CompletionListBackground, #282e2f);
  color: var(--CompletionListForeground, white);
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.36);
  font-size: 13px;
  line-height: 20px;
  user-select: none;
}

.ExtensionSearchCompletionItem {
  display: block;
  width: 100%;
  min-height: 20px;
  padding: 0 6px;
  border: 0;
  background: transparent;
  color: inherit;
  font: inherit;
  line-height: inherit;
  text-align: left;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
  cursor: pointer;
}

.ExtensionSearchCompletionItem:hover {
  background: var(--CompletionListItemHoverBackground, rgba(64, 92, 80, 0.2));
}

.ExtensionSearchCompletionItemFocused {
  background: var(--CompletionListItemActiveBackground, #405c50);
  color: var(--CompletionListItemActiveForeground);
}

.ExtensionSearchCompletionHighlight {
  color: var(--CompletionHighlightForeground, #e1b974);
  font-weight: 700;
}
`
}
