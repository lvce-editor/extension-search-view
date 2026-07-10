import type { CompletionRange } from '../CompletionRange/CompletionRange.ts'

const isWhiteSpace = (character: string): boolean => {
  return /\s/.test(character)
}

export const getCompletionRange = (value: string, cursorOffset: number): CompletionRange | undefined => {
  const offset = Math.min(Math.max(cursorOffset, 0), value.length)
  let start = offset
  while (start > 0 && !isWhiteSpace(value[start - 1])) {
    start--
  }
  if (value[start] !== '@') {
    return undefined
  }
  let end = offset
  while (end < value.length && !isWhiteSpace(value[end])) {
    end++
  }
  return {
    end,
    query: value.slice(start, offset),
    start,
  }
}
