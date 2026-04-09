"use client";

import { useUser } from "@stackframe/stack";
import { Icon } from "@iconify/react";

import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

export function OrganizationSwitcher() {
  const user = useUser();
  const selectedTeam = user?.selectedTeam;
  const teamName = selectedTeam?.displayName ?? "Personal";
  const teamAvatar = selectedTeam?.profileImageUrl;

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <button className="flex min-w-0 flex-1 items-center gap-2 rounded-lg px-2 py-1.5 text-left hover:bg-accent">
          {teamAvatar && (
            <img src={teamAvatar} alt={teamName} className="size-5 rounded" />
          )}
          <span className="flex-1 truncate text-sm font-medium text-foreground">
            {teamName}
          </span>
          <Icon
            icon="solar:alt-arrow-down-linear"
            className="size-4 text-muted-foreground"
          />
        </button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="start" className="w-56">
        <DropdownMenuLabel>Organizations</DropdownMenuLabel>
        <DropdownMenuSeparator />
        <DropdownMenuItem>
          <Icon icon="solar:add-circle-linear" className="mr-2 size-4" />
          Create organization
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
