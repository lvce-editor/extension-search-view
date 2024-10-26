/**
 *
 * @param {number} size
 * @param {number} contentSize
 * @param {number} minimumSliderSize
 * @returns
 */
export const getScrollBarSize = (size: number, contentSize: number, minimumSliderSize: number) => {
  if (size >= contentSize) {
    return 0
  }
  return Math.max(Math.round(size ** 2 / contentSize), minimumSliderSize)
}

const getScrollBarOffset = (delta: number, finalDelta: number, size: number, scrollBarSize: number) => {
  const scrollBarOffset = (delta / finalDelta) * (size - scrollBarSize)
  return scrollBarOffset
}

export const getScrollBarY = getScrollBarOffset
