"use client";

import { SidebarTrigger } from "@/components/layout/AppSidebar";
import { UserMenu } from "@/components/layout/UserMenu";
import { Separator } from "@/components/ui/separator";

export function DashboardHeader() {
  return (
    <header className="flex h-14 shrink-0 items-center gap-2 border-b bg-background px-4">
      <SidebarTrigger className="-ml-1" />
      <Separator
        orientation="vertical"
        className="data-[orientation=vertical]:h-4"
      />
      <div className="ml-auto">
        <UserMenu />
      </div>
    </header>
  );
}
