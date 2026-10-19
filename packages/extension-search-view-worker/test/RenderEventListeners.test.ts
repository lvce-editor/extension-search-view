import { expect, test } from '@jest/globals'
import { EventExpression } from '@lvce-editor/constants'
import * as DomEventListenerFunctions from '../src/parts/DomEventListenerFunctions/DomEventListenerFunctions.ts'
import { renderEventListeners } from '../src/parts/RenderEventListeners/RenderEventListeners.ts'

test('renderEventListeners returns array of event listeners', () => {
  const result = renderEventListeners()
  expect(result).toBeDefined()
})

test('settings button click passes the button name to its handler', () => {
  expect(renderEventListeners()).toContainEqual({
    name: DomEventListenerFunctions.HandleSettingsButtonClick,
    params: ['handleSettingsButtonClick', EventExpression.TargetName],
  })
})
