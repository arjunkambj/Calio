import type {
  NavItemConfig,
  NavModuleConfig,
  RailIconConfig,
  SidebarData,
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
  {
    moduleId: "messages",
    label: "Messages",
    icon: "solar:chat-round-dots-linear",
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
          {
            id: "documents",
            label: "Documents",
            icon: "solar:document-text-linear",
            path: "#",
          },
          {
            id: "messages",
            label: "Messages",
            icon: "solar:chat-round-dots-linear",
            path: "#",
          },
        ],
      },
      {
        id: "library",
        label: "Library",
        items: [
          {
            id: "guides",
            label: "Guides",
            icon: "solar:book-2-linear",
            path: "#",
          },
          {
            id: "resources",
            label: "Resources",
            icon: "solar:document-text-linear",
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
            id: "contacts",
            label: "Contacts",
            icon: "solar:user-linear",
            path: "#",
          },
          {
            id: "voicemail",
            label: "Voicemail",
            icon: "solar:voicemail-linear",
            path: "#",
          },
        ],
      },
    ],
  },
  {
    id: "messages",
    label: "Messages",
    icon: "solar:chat-round-dots-linear",
    defaultPath: "#",
    sections: [
      {
        id: "main",
        items: [
          {
            id: "inbox",
            label: "Inbox",
            icon: "solar:inbox-linear",
            path: "#",
          },
          {
            id: "starred",
            label: "Starred",
            icon: "solar:star-linear",
            path: "#",
          },
          {
            id: "archived",
            label: "Archived",
            icon: "solar:archive-linear",
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
          {
            id: "activity",
            label: "Activity",
            icon: "solar:chat-round-dots-linear",
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
          {
            id: "security",
            label: "Security",
            icon: "solar:shield-keyhole-linear",
            path: "#",
          },
          {
            id: "notifications",
            label: "Notifications",
            icon: "solar:bell-linear",
            path: "#",
          },
        ],
      },
    ],
  },
];

export const utilities: NavItemConfig[] = [];

export const sidebarData: SidebarData = {
  user: {
    name: "Jordan Lee",
    email: "jordan@example.com",
    avatar:
      "https://deifkwefumgah.cloudfront.net/shadcnblocks/block/avatar/avatar1.jpg",
  },
  organization: {
    name: "Acme Inc",
  },
  railIcons,
  bottomRailIcons,
  modules,
  utilities,
};
