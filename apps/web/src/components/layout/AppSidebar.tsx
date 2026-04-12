"use client";

import { Icon } from "@iconify/react";
import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import * as React from "react";
import Link from "next/link";

import { Button } from "@/components/ui/button";
import { Collapsible, CollapsibleTrigger } from "@/components/ui/collapsible";
import {
  Drawer,
  DrawerContent,
  DrawerHeader,
  DrawerTitle,
} from "@/components/ui/drawer";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Separator } from "@/components/ui/separator";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import { cn } from "@/lib/utils";
import { sidebarData } from "@/constants/sidebar-menu";
import Logo from "@/components/layout/Logo";
import { OrganizationSwitcher } from "@/components/layout/OrganizationSwitcher";
import { UserMenu } from "@/components/layout/UserMenu";
import type {
  NavItemConfig,
  NavModuleConfig,
  RailIconConfig,
} from "@/types/sidebar";

const SIDEBAR_WIDTH = 320;
const SIDEBAR_RAIL_WIDTH = 72;
const SIDEBAR_PANEL_WIDTH = SIDEBAR_WIDTH - SIDEBAR_RAIL_WIDTH;
const SIDEBAR_KEYBOARD_SHORTCUT = "b";

interface SidebarContextValue {
  isPanelOpen: boolean;
  setPanelOpen: (open: boolean) => void;
  togglePanel: () => void;
  panelState: "expanded" | "collapsed";
}

const SidebarContext = React.createContext<SidebarContextValue | null>(null);

function useSidebar() {
  const context = React.useContext(SidebarContext);
  if (!context) {
    throw new Error("useSidebar must be used within a SidebarProvider");
  }
  return context;
}

interface SidebarProviderProps {
  defaultOpen?: boolean;
  children: React.ReactNode;
}

function SidebarProvider({
  defaultOpen = true,
  children,
}: SidebarProviderProps) {
  const [_isPanelOpen, _setIsPanelOpen] = React.useState(defaultOpen);
  const isPanelOpen = _isPanelOpen;

  const setPanelOpen = React.useCallback((open: boolean) => {
    _setIsPanelOpen(open);
  }, []);

  const togglePanel = React.useCallback(() => {
    setPanelOpen(!isPanelOpen);
  }, [isPanelOpen, setPanelOpen]);

  React.useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      if (
        event.key === SIDEBAR_KEYBOARD_SHORTCUT &&
        (event.metaKey || event.ctrlKey)
      ) {
        event.preventDefault();
        togglePanel();
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [togglePanel]);

  const panelState = isPanelOpen ? "expanded" : "collapsed";

  const value = React.useMemo<SidebarContextValue>(
    () => ({
      isPanelOpen,
      setPanelOpen,
      togglePanel,
      panelState,
    }),
    [isPanelOpen, setPanelOpen, togglePanel, panelState],
  );

  return (
    <SidebarContext.Provider value={value}>{children}</SidebarContext.Provider>
  );
}

const SidebarTrigger = React.forwardRef<
  HTMLButtonElement,
  React.ComponentPropsWithoutRef<typeof Button> & { showTooltip?: boolean }
>(({ className, onClick, showTooltip = true, ...props }, ref) => {
  const { isPanelOpen, togglePanel } = useSidebar();

  const button = (
    <Button
      ref={ref}
      variant="ghost"
      size="icon"
      className={cn(
        "size-8 !bg-transparent hover:!bg-transparent active:!bg-transparent",
        className,
      )}
      onClick={(event) => {
        onClick?.(event);
        togglePanel();
      }}
      aria-label={isPanelOpen ? "Collapse sidebar" : "Expand sidebar"}
      aria-expanded={isPanelOpen}
      {...props}
    >
      <Icon icon="solar:sidebar-minimalistic-linear" className="size-4" />
    </Button>
  );

  if (!showTooltip) {
    return button;
  }

  return (
    <Tooltip>
      <TooltipTrigger asChild>{button}</TooltipTrigger>
      <TooltipContent side="right" sideOffset={8}>
        <span>{isPanelOpen ? "Collapse" : "Expand"}</span>
        <kbd className="ml-2 rounded bg-muted px-1.5 py-0.5 text-[10px] font-medium text-muted-foreground">
          {"\u2318"}B
        </kbd>
      </TooltipContent>
    </Tooltip>
  );
});
SidebarTrigger.displayName = "SidebarTrigger";

interface SidebarRailProps {
  railIcons: RailIconConfig[];
  bottomRailIcons: RailIconConfig[];
  activeModuleId: string;
  onModuleChange: (moduleId: string) => void;
}

function SidebarRail({
  railIcons,
  bottomRailIcons,
  activeModuleId,
  onModuleChange,
}: SidebarRailProps) {
  return (
    <div className="flex h-full w-[72px] flex-col items-center justify-between py-2">
      <div className="flex flex-col items-center gap-1">
        <div className="pt-1 pb-2">
          <Link
            href="#"
            className="flex items-center justify-center rounded-lg transition-opacity outline-none hover:opacity-80 focus-visible:ring-2 focus-visible:ring-ring"
          >
            <Logo iconClassName="size-7" withWordmark={false} />
          </Link>
        </div>

        <Separator className="my-1 w-8" />

        {railIcons.map((item) => {
          const isActive = item.moduleId === activeModuleId;
          return (
            <button
              key={item.moduleId}
              type="button"
              onClick={() => onModuleChange(item.moduleId)}
              aria-label={item.label}
              className={cn(
                "group flex flex-col items-center justify-center gap-0.5 rounded-xl px-3 py-1.5 text-[10px] leading-none outline-none transition-all duration-150",
                isActive
                  ? "text-foreground"
                  : "text-muted-foreground/70 hover:text-muted-foreground",
              )}
            >
              <span
                className={cn(
                  "flex size-10 items-center justify-center rounded-lg transition-all duration-150",
                  isActive
                    ? "bg-shell-panel text-foreground shadow-xs"
                    : "text-muted-foreground group-hover:bg-accent/60 group-active:bg-accent",
                )}
              >
                <Icon icon={item.icon} className="size-5" />
              </span>
              <span>{item.label}</span>
            </button>
          );
        })}
      </div>

      <div className="flex flex-col items-center gap-1 pb-2">
        {bottomRailIcons.map((item) => {
          const isActive = item.moduleId === activeModuleId;
          return (
            <button
              key={item.moduleId}
              type="button"
              onClick={() => onModuleChange(item.moduleId)}
              aria-label={item.label}
              className={cn(
                "group flex flex-col items-center justify-center gap-0.5 rounded-xl px-3 py-1.5 text-[10px] leading-none outline-none transition-all duration-150",
                isActive
                  ? "text-foreground"
                  : "text-muted-foreground/70 hover:text-muted-foreground",
              )}
            >
              <span
                className={cn(
                  "flex size-10 items-center justify-center rounded-lg transition-all duration-150",
                  isActive
                    ? "bg-shell-panel text-foreground shadow-xs"
                    : "text-muted-foreground group-hover:bg-accent/60 group-active:bg-accent",
                )}
              >
                <Icon icon={item.icon} className="size-5" />
              </span>
              <span>{item.label}</span>
            </button>
          );
        })}
      </div>
    </div>
  );
}

interface SidebarPanelProps {
  module: NavModuleConfig;
  utilities: NavItemConfig[];
}

function isItemActive(_pathname: string, itemPath: string): boolean {
  return itemPath === "#" && _pathname === "#";
}

function SidebarPanel({ module, utilities }: SidebarPanelProps) {
  const [setupOpen, setSetupOpen] = React.useState(false);
  const prefersReducedMotion = useReducedMotion();
  const pathname = "#";

  const primarySections = module.sections.filter(
    (s) => s.id !== "studio-setup",
  );
  const setupSection = module.sections.find((s) => s.id === "studio-setup");

  const isSetupActive =
    setupSection?.items.some((item) => isItemActive(pathname, item.path)) ??
    false;

  React.useEffect(() => {
    if (isSetupActive) {
      setSetupOpen(true);
    }
  }, [isSetupActive]);

  return (
    <div
      className="relative flex h-screen flex-col overflow-hidden rounded-xl bg-shell-panel"
      style={{ width: `${SIDEBAR_PANEL_WIDTH}px` }}
    >
      <div
        key={module.id}
        className="relative flex min-h-0 flex-1 animate-in flex-col text-muted-foreground duration-200 fade-in slide-in-from-right-2"
      >
        <div className="shrink-0 px-3 pt-3 pb-1">
          <OrganizationSwitcher />
        </div>

        <ScrollArea className="min-h-0 flex-1">
          <div className="flex flex-col gap-4 px-3 pt-1 pb-3">
            {primarySections.map((section) => (
              <div key={section.id}>
                {section.label && (
                  <div className="mb-1.5 px-2 text-[11px] font-semibold uppercase tracking-wider text-muted-foreground/70">
                    {section.label}
                  </div>
                )}
                <nav className="flex flex-col gap-0.5">
                  {section.items.map((item, index) => (
                    <NavItem
                      key={item.id}
                      item={item}
                      isActive={index === 0 && section.id === "main"}
                    />
                  ))}
                </nav>
              </div>
            ))}
          </div>
        </ScrollArea>

        {(setupSection && setupSection.items.length > 0) ||
        utilities.length > 0 ? (
          <div className="shrink-0 px-3 pt-1 pb-3">
            {setupSection && setupSection.items.length > 0 && (
              <Collapsible
                open={setupOpen}
                onOpenChange={setSetupOpen}
                className="group/setup"
              >
                <div
                  className={cn("rounded-lg p-2", setupOpen && "bg-accent/40")}
                >
                  <CollapsibleTrigger
                    className={cn(
                      "flex w-full items-center gap-2 rounded-md px-2 py-1.5 text-[13px] transition-colors",
                      setupOpen && "hidden",
                      isSetupActive
                        ? "bg-primary/10 font-medium text-primary"
                        : "text-foreground/80 hover:bg-accent/60 hover:text-foreground",
                    )}
                  >
                    <Icon
                      icon="solar:settings-linear"
                      className={cn(
                        "size-4",
                        isSetupActive
                          ? "text-primary"
                          : "text-muted-foreground",
                      )}
                    />
                    <span className="font-medium">Configuration</span>
                    <Icon
                      icon="solar:arrow-right-linear"
                      className={cn(
                        "ml-auto size-4",
                        isSetupActive
                          ? "text-primary/60"
                          : "text-muted-foreground/60",
                      )}
                    />
                  </CollapsibleTrigger>

                  <AnimatePresence initial={false}>
                    {setupOpen && (
                      <motion.nav
                        initial={
                          prefersReducedMotion
                            ? false
                            : { height: 0, opacity: 0 }
                        }
                        animate={{
                          height: "auto",
                          opacity: 1,
                          transition: {
                            height: prefersReducedMotion
                              ? { duration: 0 }
                              : {
                                  type: "spring",
                                  stiffness: 500,
                                  damping: 40,
                                  mass: 1,
                                },
                            opacity: prefersReducedMotion
                              ? { duration: 0 }
                              : { duration: 0.2 },
                          },
                        }}
                        exit={{
                          height: 0,
                          opacity: 0,
                          transition: {
                            height: prefersReducedMotion
                              ? { duration: 0 }
                              : {
                                  type: "spring",
                                  stiffness: 500,
                                  damping: 40,
                                  mass: 1,
                                },
                            opacity: prefersReducedMotion
                              ? { duration: 0 }
                              : { duration: 0.15 },
                          },
                        }}
                        className="relative flex max-h-[40vh] flex-col gap-0.5 overflow-y-auto pr-6"
                      >
                        <CollapsibleTrigger
                          className="absolute top-0 right-0 p-1 text-muted-foreground/60 transition-colors hover:text-muted-foreground"
                          aria-label="Collapse configuration"
                        >
                          <Icon
                            icon="solar:alt-arrow-down-linear"
                            className="size-4"
                          />
                        </CollapsibleTrigger>
                        {setupSection.items.map((item, i) => (
                          <motion.div
                            key={item.id}
                            initial={
                              prefersReducedMotion
                                ? false
                                : { opacity: 0, x: -8 }
                            }
                            animate={{
                              opacity: 1,
                              x: 0,
                              transition: {
                                delay: prefersReducedMotion ? 0 : i * 0.03,
                                duration: prefersReducedMotion ? 0 : 0.2,
                                ease: [0.25, 0.1, 0.25, 1],
                              },
                            }}
                            exit={{
                              opacity: 0,
                              transition: {
                                duration: prefersReducedMotion ? 0 : 0.1,
                              },
                            }}
                          >
                            <NavItem
                              item={item}
                              isActive={isItemActive(pathname, item.path)}
                            />
                          </motion.div>
                        ))}
                      </motion.nav>
                    )}
                  </AnimatePresence>
                </div>
              </Collapsible>
            )}

            {utilities.length > 0 && (
              <div className="mt-2 border-t border-border/60 pt-2">
                <nav className="flex flex-col gap-0.5">
                  {utilities.map((item) => (
                    <NavItem
                      key={item.id}
                      item={item}
                      isActive={isItemActive(pathname, item.path)}
                    />
                  ))}
                </nav>
              </div>
            )}
          </div>
        ) : null}
      </div>
    </div>
  );
}

function NavItem({
  item,
  isActive,
}: {
  item: NavItemConfig;
  isActive: boolean;
}) {
  const isExternal = item.path.startsWith("http");

  return (
    <a
      href={item.path}
      target={isExternal ? "_blank" : undefined}
      rel={isExternal ? "noopener noreferrer" : undefined}
      className={cn(
        "group relative flex h-8 items-center justify-between rounded-lg px-2 text-[13px] leading-none transition-all duration-150",
        isActive
          ? "bg-primary/10 font-medium text-primary"
          : "text-foreground/80 hover:bg-accent/60 hover:text-foreground active:bg-accent",
      )}
    >
      <span className="flex min-w-0 items-center gap-2.5">
        <Icon
          icon={item.icon}
          className={cn(
            "size-4 shrink-0 transition-colors duration-150",
            isActive ? "text-primary" : "text-muted-foreground",
          )}
        />
        <span className="truncate">{item.label}</span>
      </span>
      {isExternal && (
        <Icon
          icon="solar:arrow-right-up-linear"
          className="size-3.5 text-muted-foreground opacity-0 transition-opacity duration-150 group-hover:opacity-100"
        />
      )}
    </a>
  );
}

function Area({
  visible,
  direction = "right",
  children,
}: {
  visible: boolean;
  direction?: "left" | "right";
  children: React.ReactNode;
}) {
  return (
    <div
      className={cn(
        "top-0 left-0 flex size-full flex-col transition-[opacity,transform] duration-300",
        visible
          ? "relative opacity-100"
          : cn(
              "pointer-events-none absolute opacity-0",
              direction === "left" ? "-translate-x-full" : "translate-x-full",
            ),
      )}
      aria-hidden={!visible}
      inert={!visible ? true : undefined}
    >
      {children}
    </div>
  );
}

function ContentArea({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex min-h-0 flex-1 flex-col bg-background md:bg-shell-rail md:py-2 md:pr-2">
      <div className="relative flex min-h-0 flex-1 flex-col">
        <main className="z-10 flex min-h-0 flex-1 flex-col overflow-hidden bg-background pb-20 md:rounded-xl md:pb-0">
          {children}
        </main>
      </div>
    </div>
  );
}

interface DubSidebarProps {
  railIcons: RailIconConfig[];
  bottomRailIcons: RailIconConfig[];
  activeModule: NavModuleConfig | null | undefined;
  activeModuleId: string;
  utilities: NavItemConfig[];
  onModuleChange: (moduleId: string) => void;
}

function DubSidebar({
  railIcons,
  bottomRailIcons,
  activeModule,
  activeModuleId,
  utilities,
  onModuleChange,
}: DubSidebarProps) {
  const { isPanelOpen } = useSidebar();

  const hasContent = activeModule !== null;
  const showPanel = hasContent && isPanelOpen;

  return (
    <TooltipProvider delayDuration={0}>
      <aside
        className={cn(
          "sticky top-0 z-40 hidden h-screen transition-[width] duration-300 md:block",
        )}
        style={
          {
            width: showPanel ? SIDEBAR_WIDTH : SIDEBAR_RAIL_WIDTH,
            "--sidebar-width": `${showPanel ? SIDEBAR_WIDTH : SIDEBAR_RAIL_WIDTH}px`,
            "--sidebar-rail-width": `${SIDEBAR_RAIL_WIDTH}px`,
            "--sidebar-panel-width": `${SIDEBAR_PANEL_WIDTH}px`,
          } as React.CSSProperties
        }
        data-panel-state={isPanelOpen ? "expanded" : "collapsed"}
        data-has-content={hasContent}
      >
        <nav className="grid size-full grid-cols-[72px_1fr]">
          <SidebarRail
            railIcons={railIcons}
            bottomRailIcons={bottomRailIcons}
            activeModuleId={activeModuleId}
            onModuleChange={onModuleChange}
          />
          <div
            className={cn(
              "relative size-full overflow-hidden py-2 transition-opacity duration-300",
              !showPanel && "opacity-0",
            )}
          >
            <Area visible={true} direction="left">
              {activeModule && (
                <SidebarPanel module={activeModule} utilities={utilities} />
              )}
            </Area>
          </div>
        </nav>
      </aside>
    </TooltipProvider>
  );
}

interface MobileNavigationProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
  railIcons: RailIconConfig[];
  bottomRailIcons: RailIconConfig[];
  activeModule: NavModuleConfig | null | undefined;
  activeModuleId: string;
  utilities: NavItemConfig[];
  onModuleChange: (moduleId: string) => void;
}

function MobileNavigation({
  open,
  onOpenChange,
  railIcons,
  bottomRailIcons,
  activeModule,
  activeModuleId,
  utilities,
  onModuleChange,
}: MobileNavigationProps) {
  const pathname = "#";
  const handleItemSelect = () => onOpenChange(false);

  return (
    <>
      <Drawer open={open} onOpenChange={onOpenChange}>
        <DrawerContent className="md:hidden">
          <DrawerHeader>
            <DrawerTitle>{activeModule?.label ?? "Navigation"}</DrawerTitle>
          </DrawerHeader>
          <ScrollArea className="max-h-[70vh] px-4 pb-6">
            {activeModule ? (
              <>
                <div className="flex flex-col gap-6">
                  {activeModule.sections.map((section) => (
                    <div key={section.id}>
                      {section.label && (
                        <div className="mb-2 pl-2 text-xs font-medium tracking-wide text-muted-foreground uppercase">
                          {section.label}
                        </div>
                      )}
                      <nav className="flex flex-col gap-0.5">
                        {section.items.map((item, index) => (
                          <MobileNavItem
                            key={item.id}
                            item={item}
                            isActive={index === 0 && section.id === "main"}
                            onSelect={handleItemSelect}
                          />
                        ))}
                      </nav>
                    </div>
                  ))}
                </div>

                {utilities.length > 0 && (
                  <div className="mt-6 border-t border-border pt-3">
                    <div className="mb-2 pl-2 text-xs font-medium tracking-wide text-muted-foreground uppercase">
                      Utilities
                    </div>
                    <nav className="flex flex-col gap-0.5">
                      {utilities.map((item) => (
                        <MobileNavItem
                          key={item.id}
                          item={item}
                          isActive={isItemActive(pathname, item.path)}
                          onSelect={handleItemSelect}
                        />
                      ))}
                    </nav>
                  </div>
                )}
              </>
            ) : null}
          </ScrollArea>
        </DrawerContent>
      </Drawer>

      <nav className="fixed inset-x-0 bottom-0 z-40 border-t bg-background/95 backdrop-blur-lg supports-[backdrop-filter]:bg-background/80 md:hidden">
        <div
          className="grid"
          style={{
            gridTemplateColumns: `repeat(${railIcons.length + bottomRailIcons.length}, minmax(0, 1fr))`,
          }}
        >
          {[...railIcons, ...bottomRailIcons].map((module) => {
            const isActive = module.moduleId === activeModuleId;
            return (
              <button
                key={module.moduleId}
                type="button"
                onClick={() => {
                  onModuleChange(module.moduleId);
                  onOpenChange(true);
                }}
                className={cn(
                  "flex flex-col items-center gap-1 py-3 text-xs",
                  isActive
                    ? "text-primary"
                    : "text-muted-foreground hover:text-foreground",
                )}
                aria-label={module.label}
              >
                <Icon icon={module.icon} className="size-5" />
                <span className="sr-only">{module.label}</span>
                <span aria-hidden="true">{module.label}</span>
              </button>
            );
          })}
        </div>
      </nav>
    </>
  );
}

function MobileNavItem({
  item,
  isActive,
  onSelect,
}: {
  item: NavItemConfig;
  isActive: boolean;
  onSelect?: () => void;
}) {
  const isExternal = item.path.startsWith("http");

  return (
    <a
      href={item.path}
      target={isExternal ? "_blank" : undefined}
      rel={isExternal ? "noopener noreferrer" : undefined}
      onClick={onSelect}
      className={cn(
        "group flex h-8 items-center justify-between rounded-lg p-2 text-sm leading-none transition-[background-color,color,font-weight] duration-75",
        isActive
          ? "bg-primary/10 font-medium text-primary hover:bg-primary/15 active:bg-primary/20"
          : "text-foreground hover:bg-accent active:bg-accent/80",
      )}
    >
      <span className="flex min-w-0 items-center gap-2.5">
        <Icon
          icon={item.icon}
          className={cn(
            "size-4 shrink-0",
            isActive ? "text-primary" : "text-muted-foreground",
          )}
        />
        <span className="truncate">{item.label}</span>
      </span>
      {isExternal && (
        <Icon
          icon="solar:arrow-right-up-linear"
          className="size-3.5 text-muted-foreground transition-transform duration-75 group-hover:translate-x-px group-hover:-translate-y-px"
        />
      )}
    </a>
  );
}

export { SidebarProvider, SidebarTrigger, useSidebar };

export function ApplicationShell({ children }: { children: React.ReactNode }) {
  const [isMobilePanelOpen, setIsMobilePanelOpen] = React.useState(false);
  const [activeModuleId, setActiveModuleId] = React.useState("home");

  const activeModule = React.useMemo(
    () =>
      sidebarData.modules.find((m) => m.id === activeModuleId) ??
      sidebarData.modules[0],
    [activeModuleId],
  );

  return (
    <SidebarProvider>
      <div className="flex h-screen flex-col overflow-hidden bg-shell-rail">
        <header className="flex h-16 shrink-0 items-center gap-2 border-b bg-background px-4 md:hidden">
          <Link href="#" className="flex items-center gap-2">
            <Logo iconClassName="size-8" withWordmark={false} />
          </Link>
          <Separator
            orientation="vertical"
            className="data-[orientation=vertical]:h-4"
          />
          <div className="shrink-0">
            <OrganizationSwitcher />
          </div>
          <div className="ml-auto">
            <UserMenu />
          </div>
        </header>

        <div className="flex min-h-0 flex-1 md:grid md:gap-2 md:grid-cols-[min-content_minmax(0,1fr)]">
          <DubSidebar
            railIcons={sidebarData.railIcons}
            bottomRailIcons={sidebarData.bottomRailIcons}
            activeModule={activeModule}
            activeModuleId={activeModuleId}
            utilities={sidebarData.utilities}
            onModuleChange={setActiveModuleId}
          />

          <ContentArea>{children}</ContentArea>
        </div>

        <MobileNavigation
          open={isMobilePanelOpen}
          onOpenChange={setIsMobilePanelOpen}
          railIcons={sidebarData.railIcons}
          bottomRailIcons={sidebarData.bottomRailIcons}
          activeModule={activeModule}
          activeModuleId={activeModuleId}
          utilities={sidebarData.utilities}
          onModuleChange={setActiveModuleId}
        />
      </div>
    </SidebarProvider>
  );
}
