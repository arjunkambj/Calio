import { ApplicationShell } from "@/components/layout/AppSidebar";
import { DashboardHeader } from "@/components/layout/DashboardHeader";

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <ApplicationShell>
      <DashboardHeader />
      {children}
    </ApplicationShell>
  );
}
