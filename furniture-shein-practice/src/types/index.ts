export interface NavItem {
  title: string;
  href: string;
  Description?: string;
}

export interface NavItemWithChildren extends NavItem {
  card: NavItemWithChildren[];
  menu: NavItemWithChildren[];
}

export type MainNavItem = NavItemWithChildren;
