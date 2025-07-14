import type { DomEventListener } from '../DomEventListener/DomEventListener.ts'
import * as DomEventListenerFunctions from '../DomEventListenerFunctions/DomEventListenerFunctions.ts'
import * as InputSource from '../InputSource/InputSource.ts'

export const renderEventListeners = (): readonly DomEventListener[] => {
  return [
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
      params: ['handleInput', 'event.target.value', InputSource.User],
    },
    {
      name: DomEventListenerFunctions.HandleClearSearchResults,
      params: ['clearSearchResults'],
    },
    {
      name: DomEventListenerFunctions.HandleClickFilter,
      params: ['handleClickFilter'],
    },
    {
      name: DomEventListenerFunctions.HandleListContextMenu,
      params: ['handleContextMenu', 'event.button', 'event.clientX', 'event.clientY'],
      preventDefault: true,
    },
  ]
}
