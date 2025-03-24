import { expect, test } from '@jest/globals'
import * as GetActions from '../src/parts/GetActions/GetActions.ts'
import * as ActionType from '../src/parts/ActionType/ActionType.ts'
import * as ViewletExtensionStrings from '../src/parts/ExtensionStrings/ExtensionStrings.ts'
import * as MaskIcon from '../src/parts/MaskIcon/MaskIcon.ts'

test('returns correct actions', () => {
  const actions = GetActions.getActions()
  expect(actions).toHaveLength(2)
  expect(actions[0]).toEqual({
    type: ActionType.Button,
    id: ViewletExtensionStrings.refresh(),
    icon: MaskIcon.Refresh,
    command: '',
  })
  expect(actions[1]).toEqual({
    type: ActionType.Button,
    id: ViewletExtensionStrings.viewsAndMoreActions(),
    icon: MaskIcon.Ellipsis,
    command: '',
  })
})
