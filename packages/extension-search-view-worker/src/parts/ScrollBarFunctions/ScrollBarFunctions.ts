export const getScrollBarY = (delta: number, finalDelta: number, size: number, scrollBarSize: number): number => {
  if (finalDelta === 0) {
    return 0
  }
  const scrollBarOffset = (delta / finalDelta) * (size - scrollBarSize)
  return scrollBarOffset
}
