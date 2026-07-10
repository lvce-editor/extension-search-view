import { EventExpression } from '@lvce-editor/constants'
import type { DomEventListener } from '../DomEventListener/DomEventListener.ts'
import * as DomEventListenerFunctions from '../DomEventListenerFunctions/DomEventListenerFunctions.ts'
import * as InputSource from '../InputSource/InputSource.ts'

export const renderEventListeners = (): readonly DomEventListener[] => {
  return [
    {
      name: DomEventListenerFunctions.HandleContextMenu,
      params: ['handleContextMenu', EventExpression.Button, EventExpression.ClientX, EventExpression.ClientY],
      preventDefault: true,
    },
    {
      name: DomEventListenerFunctions.HandleHeaderContextMenu,
      params: ['handleHeaderContextMenu'],
      preventDefault: true,
    },
    {
      name: DomEventListenerFunctions.HandlePointerDown,
      params: ['handleClickAt', EventExpression.Button, EventExpression.ClientX, EventExpression.ClientY, EventExpression.TargetName],
      preventDefault: true,
    },
    {
      name: DomEventListenerFunctions.HandleScrollBarPointerDown,
      params: ['handleScrollBarClick', EventExpression.ClientY],
      preventDefault: true,
      trackPointerEvents: [DomEventListenerFunctions.HandleScrollBarMove, DomEventListenerFunctions.HandleScrollBarPointerCaptureLost],
    },
    {
      name: DomEventListenerFunctions.HandleScrollBarMove,
      params: ['handleScrollBarMove', EventExpression.ClientY],
    },
    {
      name: DomEventListenerFunctions.HandleScrollBarPointerCaptureLost,
      params: ['handleScrollBarCaptureLost'],
    },
    {
      name: DomEventListenerFunctions.HandleWheel,
      params: ['handleWheel', EventExpression.DeltaMode, EventExpression.DeltaY],
      passive: true,
    },
    {
      name: DomEventListenerFunctions.HandleExtensionsInput,
      params: ['handleInput', EventExpression.TargetValue, InputSource.User, EventExpression.TargetSelectionStart],
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
      name: DomEventListenerFunctions.HandleFocus,
      params: ['handleFocus'],
    },
    {
      name: DomEventListenerFunctions.HandleBlur,
      params: ['handleBlur'],
    },
    {
      name: DomEventListenerFunctions.HandleInstall,
      params: ['handleInstall', EventExpression.TargetName],
    },
    {
      name: DomEventListenerFunctions.HandleUninstall,
      params: ['handleUninstall', EventExpression.TargetName],
    },
    {
      name: DomEventListenerFunctions.HandleEnable,
      params: ['handleEnable', EventExpression.TargetName],
    },
    {
      name: DomEventListenerFunctions.HandleDisable,
      params: ['handleDisable', EventExpression.TargetName],
    },
    {
      name: DomEventListenerFunctions.HandleInputFocus,
      params: ['handleInputFocus'],
    },
    {
      name: DomEventListenerFunctions.HandleInputBlur,
      params: ['handleBlur'],
    },
  ]
}
