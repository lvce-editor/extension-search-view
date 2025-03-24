export const first = (): number => {
  return 0
}

export const last = (items: readonly any[]): number => {
  return items.length - 1
}

export const next = (items: readonly any[], index: number): number => {
  return (index + 1) % items.length
}
