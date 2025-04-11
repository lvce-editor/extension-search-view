import { test, expect } from '@jest/globals'
import * as DomEventListenerFunctions from '../src/parts/DomEventListenerFunctions/DomEventListenerFunctions.ts'
import * as InputSource from '../src/parts/InputSource/InputSource.ts'
import { renderEventListeners } from '../src/parts/RenderEventListeners/RenderEventListeners.ts'

test('renderEventListeners returns array of event listeners', () => {
  const result = renderEventListeners()
  expect(result).toEqual([
    {
      name: DomEventListenerFunctions.HandleContextMenu,
      params: ['handleContextMenu', 'event.button', 'event.clientX', 'event.clientY'],
      preventDefault: true,
    },
    {
      name: DomEventListenerFunctions.HandleWheel,
      params: ['handleWheel', 'event.deltaMode', 'event.deltaY'],
      passive: true,
    },
    {
      name: DomEventListenerFunctions.HandleExtensionsInput,
      params: ['handleExtensionsInput', 'event.target.value', InputSource.User],
    },
  ])
})
