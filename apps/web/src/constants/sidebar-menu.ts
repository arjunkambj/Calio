export interface NavItem {
  title: string;
  icon: string;
  href: string;
  badge?: string;
}

export interface NavGroup {
  title?: string;
  items: NavItem[];
}

export const sidebarMenu: NavGroup[] = [
  {
    items: [
      {
        title: "Overview",
        icon: "solar:home-2-bold-duotone",
        href: "/overview",
      },
      {
        title: "Settings",
        icon: "solar:settings-bold-duotone",
        href: "/settings",
      },
    ],
  },
];
