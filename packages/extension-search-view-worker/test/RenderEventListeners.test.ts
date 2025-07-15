import { expect, test } from '@jest/globals'
import { renderEventListeners } from '../src/parts/RenderEventListeners/RenderEventListeners.ts'

test('renderEventListeners returns array of event listeners', () => {
  const result = renderEventListeners()
  expect(result).toBeDefined()
})
