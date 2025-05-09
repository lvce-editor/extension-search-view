import * as ViewletRegistry from '@lvce-editor/viewlet-registry'
import type { State } from '../State/State.ts'

export const { get, set, dispose, getKeys, wrapCommand } = ViewletRegistry.create<State>()
