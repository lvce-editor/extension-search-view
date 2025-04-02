import type { State } from '../State/State.ts'
import * as ViewletRegistry from '../ViewletRegistry/ViewletRegistry.ts'

export const { get, set, dispose, getKeys } = ViewletRegistry.create<State>()
