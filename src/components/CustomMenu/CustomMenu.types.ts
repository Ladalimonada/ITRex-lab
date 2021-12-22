export interface MenuItemModel {
  isColored?: boolean,
  title: string,
  onClick?:() => void,
  path?: string,
}

export type CustomMenuProps = {
  menuItems: MenuItemModel[],
};