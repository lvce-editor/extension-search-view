import type { MenuEntryId } from '@lvce-editor/constants'
// eslint-disable-next-line @typescript-eslint/consistent-type-imports
import * as MenuEntryIdLocal from '../MenuEntryId/MenuEntryId.ts'

export interface ContextMenuPropsBase {
  readonly menuId: number
}

export interface ContextMenuPropsExplorer extends ContextMenuPropsBase {
  readonly menuId: typeof MenuEntryId.ManageExtension
}

export interface ContextMenuPropsExtensionSearchFilter extends ContextMenuPropsBase {
  readonly menuId: typeof MenuEntryIdLocal.ExtensionSearchFilter
}

export type ContextMenuProps = ContextMenuPropsExplorer | ContextMenuPropsExtensionSearchFilter
