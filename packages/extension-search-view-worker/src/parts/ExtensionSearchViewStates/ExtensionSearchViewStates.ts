import * as ViewletRegistry from '@lvce-editor/viewlet-registry'
import type { State } from '../State/State.ts'

export const { diff, dispose, get, getCommandIds, getKeys, registerCommands, set, wrapCommand, wrapGetter } = ViewletRegistry.create<State>()
