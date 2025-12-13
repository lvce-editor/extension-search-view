import { VirtualDomElements } from '@lvce-editor/virtual-dom-worker'
import type { VirtualDomNode } from '../VirtualDomNode/VirtualDomNode.ts'
import type { VisibleItem } from '../VisibleItem/VisibleItem.ts'
import * as AriaRoleDescription from '../AriaRoleDescription/AriaRoleDescription.ts'
import * as AriaRoles from '../AriaRoles/AriaRoles.ts'
import * as ClassNames from '../ClassNames/ClassNames.ts'
import * as MergeClassNames from '../MergeClassNames/MergeClassNames.ts'
import { text } from '../VirtualDomHelpers/VirtualDomHelpers.ts'

const listItemDetail: VirtualDomNode = {
  childCount: 3,
  className: ClassNames.ExtensionListItemDetail,
  type: VirtualDomElements.Div,
}
const listItemName: VirtualDomNode = {
  childCount: 1,
  className: ClassNames.ExtensionListItemName,
  type: VirtualDomElements.Div,
}

const listItemDescription: VirtualDomNode = {
  childCount: 1,
  className: ClassNames.ExtensionListItemDescription,
  type: VirtualDomElements.Div,
}

const listItemFooter: VirtualDomNode = {
  childCount: 2,
  className: ClassNames.ExtensionListItemFooter,
  type: VirtualDomElements.Div,
}

const listItemAuthorName: VirtualDomNode = {
  childCount: 1,
  className: ClassNames.ExtensionListItemAuthorName,
  type: VirtualDomElements.Div,
}

const getClassName = (focused: boolean): string => {
  if (focused) {
    return MergeClassNames.mergeClassNames(ClassNames.ExtensionListItem, ClassNames.ExtensionActive)
  }
  return ClassNames.ExtensionListItem
}

const getId = (focused: boolean): string | undefined => {
  if (focused) {
    return `ExtensionActive`
  }
  return undefined
}

export const getExtensionListItemVirtualDom = (extension: VisibleItem): readonly VirtualDomNode[] => {
  const { description, focused, icon, name, posInSet, publisher, setSize, top } = extension
  const dom: readonly VirtualDomNode[] = [
    {
      ariaPosInSet: posInSet,
      ariaRoleDescription: AriaRoleDescription.Extension,
      ariaSetSize: setSize,
      childCount: 2,
      className: getClassName(focused),
      id: getId(focused),
      role: AriaRoles.ListItem,
      top,
      type: VirtualDomElements.Div,
    },
    {
      childCount: 0,
      className: ClassNames.ExtensionListItemIcon,
      role: AriaRoles.None,
      src: icon,
      type: VirtualDomElements.Img,
    },
    listItemDetail,
    listItemName,
    text(name),
    listItemDescription,
    text(description),
    listItemFooter,
    listItemAuthorName,
    text(publisher),
    {
      childCount: 0,
      className: ClassNames.ExtensionActions,
      type: VirtualDomElements.Div,
    },
  ]
  return dom
}
