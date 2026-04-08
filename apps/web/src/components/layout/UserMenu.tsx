"use client";

import * as React from "react";

import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import {
  Tooltip,
  TooltipContent,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import { sidebarData } from "@/constants/sidebar-menu";

function getInitials(name: string) {
  return (
    name
      .split(" ")
      .filter(Boolean)
      .slice(0, 2)
      .map((part) => part[0]?.toUpperCase())
      .join("") || "U"
  );
}

function UserMenu() {
  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <button
          className="flex size-11 items-center justify-center rounded-lg hover:bg-accent focus-visible:ring-2 focus-visible:ring-ring active:bg-accent/80"
          aria-label="Account"
        >
          <Avatar className="size-7">
            <AvatarImage
              src={sidebarData.user.avatar}
              alt={sidebarData.user.name}
            />
            <AvatarFallback className="text-xs">
              {getInitials(sidebarData.user.name)}
            </AvatarFallback>
          </Avatar>
        </button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end" side="right" className="w-56">
        <DropdownMenuLabel className="font-normal">
          <div className="flex flex-col space-y-1">
            <p className="text-sm font-medium">{sidebarData.user.name}</p>
            <p className="text-xs text-muted-foreground">
              {sidebarData.user.email}
            </p>
          </div>
        </DropdownMenuLabel>
        <DropdownMenuSeparator />
        <DropdownMenuItem>Account</DropdownMenuItem>
        <DropdownMenuItem>Billing</DropdownMenuItem>
        <DropdownMenuItem>Notifications</DropdownMenuItem>
        <DropdownMenuSeparator />
        <DropdownMenuItem>Log out</DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}

function UserMenuWithTooltip() {
  return (
    <Tooltip>
      <TooltipTrigger asChild>
        <div className="flex size-11 items-center justify-center">
          <UserMenu />
        </div>
      </TooltipTrigger>
      <TooltipContent side="right" sideOffset={8}>
        Account
      </TooltipContent>
    </Tooltip>
  );
}

export { UserMenu, UserMenuWithTooltip };
