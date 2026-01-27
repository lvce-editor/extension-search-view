import { expect, test } from '@jest/globals'
import { createDefaultState } from '../src/parts/CreateDefaultState/CreateDefaultState.ts'
import { renderCss } from '../src/parts/RenderCss/RenderCss.ts'

test('returns SetCss command with correct uid and css', () => {
  const state = {
    ...createDefaultState(),
    deltaY: 0,
    itemHeight: 24,
    scrollBarHeight: 100,
    scrollBarY: 0,
    uid: 1,
  }
  const result = renderCss(state)
  expect(result).toEqual([
    'Viewlet.setCss',
    1,
    `.Extensions .ScrollBarThumb {
  height: 100px;
  translate: 0 0px;
}


/* TODO: avoid using negative margin. find a better way*/
.ExtensionListItem:nth-child(1) {
  margin-top: 0px;
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
`,
  ])
})

test('returns SetCss command with different uid', () => {
  const state = {
    ...createDefaultState(),
    deltaY: 0,
    itemHeight: 24,
    scrollBarHeight: 100,
    scrollBarY: 0,
    uid: 5,
  }
  const result = renderCss(state)
  expect(result).toEqual([
    'Viewlet.setCss',
    5,
    `.Extensions .ScrollBarThumb {
  height: 100px;
  translate: 0 0px;
}


/* TODO: avoid using negative margin. find a better way*/
.ExtensionListItem:nth-child(1) {
  margin-top: 0px;
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
`,
  ])
})

test('returns SetCss command with non-zero deltaY', () => {
  const state = {
    ...createDefaultState(),
    deltaY: 50,
    itemHeight: 24,
    scrollBarHeight: 100,
    scrollBarY: 10,
    uid: 1,
  }
  const result = renderCss(state)
  expect(result).toEqual([
    'Viewlet.setCss',
    1,
    `.Extensions .ScrollBarThumb {
  height: 100px;
  translate: 0 10px;
}


/* TODO: avoid using negative margin. find a better way*/
.ExtensionListItem:nth-child(1) {
  margin-top: -2px;
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
`,
  ])
})

test('returns SetCss command with different scrollBarY', () => {
  const state = {
    ...createDefaultState(),
    deltaY: 0,
    itemHeight: 24,
    scrollBarHeight: 100,
    scrollBarY: 25.7,
    uid: 1,
  }
  const result = renderCss(state)
  expect(result).toEqual([
    'Viewlet.setCss',
    1,
    `.Extensions .ScrollBarThumb {
  height: 100px;
  translate: 0 26px;
}


/* TODO: avoid using negative margin. find a better way*/
.ExtensionListItem:nth-child(1) {
  margin-top: 0px;
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
`,
  ])
})

test('returns SetCss command with negative deltaY', () => {
  const state = {
    ...createDefaultState(),
    deltaY: -30,
    itemHeight: 24,
    scrollBarHeight: 100,
    scrollBarY: 5,
    uid: 1,
  }
  const result = renderCss(state)
  expect(result).toEqual([
    'Viewlet.setCss',
    1,
    `.Extensions .ScrollBarThumb {
  height: 100px;
  translate: 0 5px;
}


/* TODO: avoid using negative margin. find a better way*/
.ExtensionListItem:nth-child(1) {
  margin-top: 6px;
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
`,
  ])
})
