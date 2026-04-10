import type {
  NavItemConfig,
  NavModuleConfig,
  RailIconConfig,
} from "@/types/sidebar";

export const railIcons: RailIconConfig[] = [
  {
    moduleId: "home",
    label: "Home",
    icon: "solar:home-2-linear",
    defaultPath: "#",
  },
  {
    moduleId: "phone",
    label: "Phone",
    icon: "solar:phone-linear",
    defaultPath: "#",
  },
];

export const bottomRailIcons: RailIconConfig[] = [
  {
    moduleId: "team",
    label: "Teams",
    icon: "solar:users-group-rounded-linear",
    defaultPath: "#",
  },
  {
    moduleId: "settings",
    label: "Settings",
    icon: "solar:settings-linear",
    defaultPath: "#",
  },
];

export const modules: NavModuleConfig[] = [
  {
    id: "home",
    label: "Home",
    icon: "solar:home-2-linear",
    defaultPath: "#",
    sections: [
      {
        id: "main",
        items: [
          {
            id: "overview",
            label: "Overview",
            icon: "solar:home-2-linear",
            path: "#",
          },
        ],
      },
    ],
  },
  {
    id: "phone",
    label: "Phone",
    icon: "solar:phone-linear",
    defaultPath: "#",
    sections: [
      {
        id: "main",
        items: [
          {
            id: "calls",
            label: "Calls",
            icon: "solar:phone-linear",
            path: "#",
          },
          {
            id: "messages",
            label: "Messages",
            icon: "solar:chat-round-dots-linear",
            path: "#",
          },
          {
            id: "contacts",
            label: "Contacts",
            icon: "solar:user-linear",
            path: "#",
          },
        ],
      },
    ],
  },
  {
    id: "team",
    label: "Teams",
    icon: "solar:users-group-rounded-linear",
    defaultPath: "#",
    sections: [
      {
        id: "main",
        items: [
          {
            id: "members",
            label: "Members",
            icon: "solar:users-group-rounded-linear",
            path: "#",
          },
        ],
      },
    ],
  },
  {
    id: "settings",
    label: "Settings",
    icon: "solar:settings-linear",
    defaultPath: "#",
    sections: [
      {
        id: "main",
        items: [
          {
            id: "general",
            label: "General",
            icon: "solar:settings-linear",
            path: "#",
          },
        ],
      },
    ],
  },
];

export const utilities: NavItemConfig[] = [];

export const sidebarData = {
  railIcons,
  bottomRailIcons,
  modules,
  utilities,
};
