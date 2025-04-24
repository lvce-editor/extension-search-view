import type { State } from '../State/State.ts'
import * as ViewletRegistry from '@lvce-editor/viewlet-registry'

export const { get, set, dispose, getKeys, wrapCommand } = ViewletRegistry.create<State>()
