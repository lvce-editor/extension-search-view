import * as AriaRoleDescription from '../AriaRoleDescription/AriaRoleDescription.ts'
import * as AriaRoles from '../AriaRoles/AriaRoles.ts'
import * as ClassNames from '../ClassNames/ClassNames.ts'
import * as VirtualDomElements from '../VirtualDomElements/VirtualDomElements.ts'
import { text } from '../VirtualDomHelpers/VirtualDomHelpers.ts'

const listItemDetail = {
  type: VirtualDomElements.Div,
  className: ClassNames.ExtensionListItemDetail,
  childCount: 3,
}
const listItemName = {
  type: VirtualDomElements.Div,
  className: ClassNames.ExtensionListItemName,
  childCount: 1,
}

const listItemDescription = {
  type: VirtualDomElements.Div,
  className: ClassNames.ExtensionListItemDescription,
  childCount: 1,
}

const listItemFooter = {
  type: VirtualDomElements.Div,
  className: ClassNames.ExtensionListItemFooter,
  childCount: 2,
}

const listItemAuthorName = {
  type: VirtualDomElements.Div,
  className: ClassNames.ExtensionListItemAuthorName,
  childCount: 1,
}

export const getExtensionListItemVirtualDom = (extension: any) => {
  const { posInSet, setSize, top, icon, name, description, publisher, focused } = extension
  const dom: any[] = [
    {
      type: VirtualDomElements.Div,
      role: AriaRoles.ListItem,
      ariaRoleDescription: AriaRoleDescription.Extension,
      className: ClassNames.ExtensionListItem,
      ariaPosInSet: posInSet,
      ariaSetSize: setSize,
      top,
      childCount: 2,
    },
    {
      type: VirtualDomElements.Img,
      src: icon,
      className: ClassNames.ExtensionListItemIcon,
      role: AriaRoles.None,
      childCount: 0,
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
      type: VirtualDomElements.Div,
      className: ClassNames.ExtensionActions,
      childCount: 0,
    },
  ]
  if (focused) {
    dom[0].id = 'ExtensionActive'
    dom[0].className += ' ' + ClassNames.ExtensionActive
  }
  return dom
}
