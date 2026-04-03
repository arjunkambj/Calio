"use client";

import { useMemo, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { Icon } from "@iconify/react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import comparisonRows from "@/constants/prop-firms-manager.json";

const ALL_FILTER = "all";
type ComparisonRow = (typeof comparisonRows)[number];
const filterControlClass =
  "h-10 rounded-3xl border-border/70 bg-background text-sm";
const filterResetClass =
  "h-10 rounded-3xl border-border/70 bg-background px-4 text-sm";

const fundingOptions = Array.from(
  new Set(comparisonRows.flatMap((firm) => firm.fundingType)),
).sort((a, b) => a.localeCompare(b));

const drawdownOptions = Array.from(
  new Set(comparisonRows.flatMap((firm) => firm.drawdownType)),
).sort((a, b) => a.localeCompare(b));

const platformOptions = Array.from(
  new Set(comparisonRows.flatMap((firm) => firm.platforms)),
).sort((a, b) => a.localeCompare(b));

const payoutOptions = Array.from(
  new Set(comparisonRows.flatMap((firm) => firm.payoutMethods)),
).sort((a, b) => a.localeCompare(b));

const badgeTone = {
  Evaluation: "border-primary/15 bg-primary/10 text-primary",
  Instant: "border-border/70 bg-background text-foreground",
  EOD: "border-border/70 bg-background text-muted-foreground",
  Trailing: "border-border/70 bg-background text-muted-foreground",
  Intraday: "border-border/70 bg-background text-muted-foreground",
  Static: "border-border/70 bg-background text-muted-foreground",
} as const;

function DataBadge({
  label,
  tone,
}: {
  label: string;
  tone?: keyof typeof badgeTone;
}) {
  return (
    <span
      className={[
        "inline-flex rounded-full border px-2 py-0.5 text-[10px] font-medium uppercase tracking-wide",
        tone
          ? badgeTone[tone]
          : "border-border/70 bg-background text-muted-foreground",
      ].join(" ")}
    >
      {label}
    </span>
  );
}

function PillList({ values }: { values: string[] }) {
  return (
    <div className="flex flex-wrap gap-1.5">
      {values.map((value) => (
        <DataBadge
          key={value}
          label={value}
          tone={
            value in badgeTone ? (value as keyof typeof badgeTone) : undefined
          }
        />
      ))}
    </div>
  );
}

function FirmNameCell({ firm }: { firm: ComparisonRow }) {
  return (
    <div className="flex min-w-[176px] items-center gap-3">
      <div className="h-10 w-10 shrink-0 overflow-hidden rounded-md border border-border/70 bg-background">
        <Image
          src={firm.logoImage}
          alt={firm.name}
          width={40}
          height={40}
          className="object-cover"
        />
      </div>
      <div className="min-w-0">
        <p className="truncate text-sm font-semibold text-foreground transition-colors group-hover:text-primary">
          {firm.name}
        </p>
        <span className="mt-1 inline-flex rounded-full bg-primary px-2 py-0.5 text-[10px] font-semibold uppercase tracking-wide text-primary-foreground">
          {firm.discountText}
        </span>
      </div>
    </div>
  );
}

function PropertyCell({
  label,
  children,
}: {
  label: string;
  children: React.ReactNode;
}) {
  return (
    <div>
      <p className="text-[11px] font-medium text-muted-foreground">{label}</p>
      <div className="mt-1">{children}</div>
    </div>
  );
}

function PromoCodeButton({ code }: { code: string }) {
  const [copied, setCopied] = useState(false);

  const handleCopy = () => {
    try {
      navigator.clipboard.writeText(code);
      setCopied(true);
      setTimeout(() => setCopied(false), 1500);
    } catch {
      // clipboard API may fail in some contexts — silently ignore
    }
  };

  return (
    <button
      type="button"
      onClick={handleCopy}
      className="inline-flex items-center gap-1.5 rounded-full border border-border/70 bg-background px-2.5 py-1 text-[10px] font-semibold uppercase tracking-wide text-muted-foreground transition-colors hover:border-primary/20 hover:text-foreground"
    >
      {code}
      <Icon
        icon={copied ? "solar:check-circle-bold" : "solar:copy-linear"}
        className={`h-3 w-3 ${copied ? "text-primary" : ""}`}
      />
    </button>
  );
}

function FirmCard({ firm }: { firm: ComparisonRow }) {
  const dealHref = firm.dealUrl || "/sign-in";
  const isExternalDeal = dealHref.startsWith("http");

  return (
    <div className="rounded-3xl border border-border/60 bg-background p-4">
      <Link
        href={dealHref}
        target={isExternalDeal ? "_blank" : undefined}
        rel={isExternalDeal ? "noopener noreferrer" : undefined}
        className="group flex items-center gap-3"
      >
        <div className="h-12 w-12 shrink-0 overflow-hidden rounded-lg border border-border/70 bg-background">
          <Image
            src={firm.logoImage}
            alt={firm.name}
            width={48}
            height={48}
            className="object-cover"
          />
        </div>
        <div className="min-w-0 flex-1">
          <p className="truncate text-sm font-semibold text-foreground transition-colors group-hover:text-primary">
            {firm.name}
          </p>
          <span className="mt-0.5 inline-flex rounded-full bg-primary px-2 py-0.5 text-[10px] font-semibold uppercase tracking-wide text-primary-foreground">
            {firm.discountText}
          </span>
        </div>
      </Link>

      <div className="mt-4 grid grid-cols-2 gap-x-4 gap-y-3">
        <PropertyCell label="Platforms">
          <div className="flex flex-wrap gap-1">
            {firm.platforms.map((platform) => (
              <span
                key={platform}
                className="inline-flex rounded-full border border-border/70 bg-background px-2 py-0.5 text-[10px] font-medium text-muted-foreground"
              >
                {platform}
              </span>
            ))}
          </div>
        </PropertyCell>

        <PropertyCell label="Activation Fee">
          <p className="text-sm font-semibold text-foreground">
            {firm.activationFee}
          </p>
        </PropertyCell>

        <PropertyCell label="Funding Type">
          <PillList values={firm.fundingType} />
        </PropertyCell>

        <PropertyCell label="Drawdown Type">
          <PillList values={firm.drawdownType} />
        </PropertyCell>

        <PropertyCell label="Max Accounts">
          <p className="text-sm font-semibold text-foreground">
            {firm.maxAccounts}
          </p>
        </PropertyCell>

        <PropertyCell label="Payout Methods">
          <PillList values={firm.payoutMethods} />
        </PropertyCell>

        <PropertyCell label="Promo Code">
          <PromoCodeButton code={firm.promoCode} />
        </PropertyCell>
      </div>

      <div className="mt-4">
        <Button asChild className="w-full text-xs font-semibold">
          <Link
            href={dealHref}
            target={isExternalDeal ? "_blank" : undefined}
            rel={isExternalDeal ? "noopener noreferrer" : undefined}
          >
            Get Deal
          </Link>
        </Button>
      </div>
    </div>
  );
}

export default function ComparisonTable() {
  const [searchFilter, setSearchFilter] = useState("");
  const [fundingFilter, setFundingFilter] = useState(ALL_FILTER);
  const [drawdownFilter, setDrawdownFilter] = useState(ALL_FILTER);
  const [platformFilter, setPlatformFilter] = useState(ALL_FILTER);
  const [payoutFilter, setPayoutFilter] = useState(ALL_FILTER);
  const [filtersOpen, setFiltersOpen] = useState(false);

  const hasFilters =
    Boolean(searchFilter) ||
    fundingFilter !== ALL_FILTER ||
    drawdownFilter !== ALL_FILTER ||
    platformFilter !== ALL_FILTER ||
    payoutFilter !== ALL_FILTER;

  const activeFilterCount = [
    searchFilter,
    fundingFilter !== ALL_FILTER ? fundingFilter : "",
    drawdownFilter !== ALL_FILTER ? drawdownFilter : "",
    platformFilter !== ALL_FILTER ? platformFilter : "",
    payoutFilter !== ALL_FILTER ? payoutFilter : "",
  ].filter(Boolean).length;

  const filteredFirms = useMemo(() => {
    return comparisonRows.filter((firm) => {
      if (
        searchFilter &&
        !firm.name.toLowerCase().includes(searchFilter.trim().toLowerCase())
      ) {
        return false;
      }
      if (
        fundingFilter !== ALL_FILTER &&
        !firm.fundingType.includes(fundingFilter)
      ) {
        return false;
      }
      if (
        drawdownFilter !== ALL_FILTER &&
        !firm.drawdownType.includes(drawdownFilter)
      ) {
        return false;
      }
      if (
        platformFilter !== ALL_FILTER &&
        !firm.platforms.includes(platformFilter)
      ) {
        return false;
      }
      if (
        payoutFilter !== ALL_FILTER &&
        !firm.payoutMethods.includes(payoutFilter)
      ) {
        return false;
      }
      return true;
    });
  }, [
    drawdownFilter,
    fundingFilter,
    payoutFilter,
    platformFilter,
    searchFilter,
  ]);

  function clearFilters() {
    setSearchFilter("");
    setFundingFilter(ALL_FILTER);
    setDrawdownFilter(ALL_FILTER);
    setPlatformFilter(ALL_FILTER);
    setPayoutFilter(ALL_FILTER);
  }

  return (
    <section
      id="comparison-table"
      className="w-full bg-background py-20 md:py-28"
    >
      <div className="container mx-auto px-4 md:px-6">
        <div className="mb-10">
          <span className="marketing-kicker">
            <span className="h-1.5 w-1.5 rounded-full bg-primary" />
            Prop Firm Comparison
          </span>
          <h2 className="marketing-title mt-5">
            Compare The Best Futures Prop Firms
          </h2>
          <p className="marketing-copy mt-4 max-w-3xl">
            Filter by platform, funding model, and payout method.
          </p>
        </div>

        <div className="marketing-soft-surface mb-4 p-3 md:p-4">
          <div className="hidden md:grid md:grid-cols-[1.8fr_repeat(4,minmax(0,1fr))_auto] gap-3">
            <Input
              value={searchFilter}
              onChange={(event) => setSearchFilter(event.target.value)}
              placeholder="Search firm name..."
              className={filterControlClass}
            />

            <Select value={fundingFilter} onValueChange={setFundingFilter}>
              <SelectTrigger className={`w-full ${filterControlClass}`}>
                <SelectValue placeholder="Funding Type" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value={ALL_FILTER}>All Funding</SelectItem>
                {fundingOptions.map((option) => (
                  <SelectItem key={option} value={option}>
                    {option}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>

            <Select value={drawdownFilter} onValueChange={setDrawdownFilter}>
              <SelectTrigger className={`w-full ${filterControlClass}`}>
                <SelectValue placeholder="Drawdown Type" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value={ALL_FILTER}>All Drawdown</SelectItem>
                {drawdownOptions.map((option) => (
                  <SelectItem key={option} value={option}>
                    {option}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>

            <Select value={platformFilter} onValueChange={setPlatformFilter}>
              <SelectTrigger className={`w-full ${filterControlClass}`}>
                <SelectValue placeholder="Platform" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value={ALL_FILTER}>All Platforms</SelectItem>
                {platformOptions.map((option) => (
                  <SelectItem key={option} value={option}>
                    {option}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>

            <Select value={payoutFilter} onValueChange={setPayoutFilter}>
              <SelectTrigger className={`w-full ${filterControlClass}`}>
                <SelectValue placeholder="Payout Method" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value={ALL_FILTER}>All Payouts</SelectItem>
                {payoutOptions.map((option) => (
                  <SelectItem key={option} value={option}>
                    {option}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>

            <Button
              type="button"
              variant="outline"
              size="sm"
              onClick={clearFilters}
              className={filterResetClass}
              disabled={!hasFilters}
            >
              Reset
            </Button>
          </div>

          <div className="md:hidden">
            <div className="flex items-center gap-2">
              <button
                type="button"
                onClick={() => setFiltersOpen((prev) => !prev)}
                className="flex h-10 flex-1 items-center justify-between rounded-3xl border border-border/70 bg-background px-3 text-sm font-medium text-foreground"
              >
                <span className="flex items-center gap-2">
                  <Icon icon="solar:filter-linear" className="h-4 w-4" />
                  Filters
                  {activeFilterCount > 0 && (
                    <span className="flex h-5 min-w-5 items-center justify-center rounded-full bg-primary px-1.5 text-[10px] font-semibold text-primary-foreground">
                      {activeFilterCount}
                    </span>
                  )}
                </span>
                <Icon
                  icon="solar:alt-arrow-down-linear"
                  className={`h-4 w-4 transition-transform ${filtersOpen ? "rotate-180" : ""}`}
                />
              </button>
              {hasFilters && (
                <Button
                  type="button"
                  variant="outline"
                  size="sm"
                  onClick={clearFilters}
                  className={`shrink-0 ${filterResetClass}`}
                >
                  Reset
                </Button>
              )}
            </div>

            {filtersOpen && (
              <div className="mt-3 grid grid-cols-2 gap-3">
                <Input
                  value={searchFilter}
                  onChange={(event) => setSearchFilter(event.target.value)}
                  placeholder="Search firm name..."
                  className={`col-span-2 ${filterControlClass}`}
                />

                <Select value={fundingFilter} onValueChange={setFundingFilter}>
                  <SelectTrigger className={`w-full ${filterControlClass}`}>
                    <SelectValue placeholder="Funding Type" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value={ALL_FILTER}>All Funding</SelectItem>
                    {fundingOptions.map((option) => (
                      <SelectItem key={option} value={option}>
                        {option}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>

                <Select
                  value={drawdownFilter}
                  onValueChange={setDrawdownFilter}
                >
                  <SelectTrigger className={`w-full ${filterControlClass}`}>
                    <SelectValue placeholder="Drawdown Type" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value={ALL_FILTER}>All Drawdown</SelectItem>
                    {drawdownOptions.map((option) => (
                      <SelectItem key={option} value={option}>
                        {option}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>

                <Select
                  value={platformFilter}
                  onValueChange={setPlatformFilter}
                >
                  <SelectTrigger className={`w-full ${filterControlClass}`}>
                    <SelectValue placeholder="Platform" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value={ALL_FILTER}>All Platforms</SelectItem>
                    {platformOptions.map((option) => (
                      <SelectItem key={option} value={option}>
                        {option}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>

                <Select value={payoutFilter} onValueChange={setPayoutFilter}>
                  <SelectTrigger className={`w-full ${filterControlClass}`}>
                    <SelectValue placeholder="Payout Method" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value={ALL_FILTER}>All Payouts</SelectItem>
                    {payoutOptions.map((option) => (
                      <SelectItem key={option} value={option}>
                        {option}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>
            )}
          </div>
        </div>

        <div className="mb-3 flex flex-wrap items-center justify-between gap-3 text-xs text-muted-foreground">
          <span className="shrink-0">
            Showing {filteredFirms.length} of {comparisonRows.length} firms
          </span>
          <div className="flex flex-wrap items-center justify-end gap-2">
            <span className="inline-flex items-center gap-2 rounded-full bg-primary/10 px-2.5 py-1 text-[10px] font-semibold uppercase tracking-wide text-primary">
              <span className="h-1.5 w-1.5 rounded-full bg-primary" />
              Updated Offers + Promos
            </span>
            <span className="inline-flex items-center gap-2 rounded-full bg-primary/10 px-2.5 py-1 text-[10px] font-semibold uppercase tracking-wide text-primary">
              <span className="h-1.5 w-1.5 rounded-full bg-primary" />
              Open Offers Or Sign In
            </span>
          </div>
        </div>

        <div className="hidden md:block overflow-x-auto rounded-3xl border border-border/60 bg-background">
          <table className="w-full min-w-[1100px] table-fixed border-collapse">
            <thead className="border-b border-border/70 bg-muted/30">
              <tr>
                <th className="w-[16%] px-4 py-3 text-left text-[10px] font-semibold uppercase tracking-[0.2em] text-muted-foreground">
                  Firm Name
                </th>
                <th className="w-[7%] px-4 py-3 text-left text-[10px] font-semibold uppercase tracking-[0.2em] text-muted-foreground">
                  Trustpilot
                </th>
                <th className="w-[13%] px-4 py-3 text-left text-[10px] font-semibold uppercase tracking-[0.2em] text-muted-foreground">
                  Platforms
                </th>
                <th className="w-[8%] px-4 py-3 text-left text-[10px] font-semibold uppercase tracking-[0.2em] text-muted-foreground">
                  Activation Fee
                </th>
                <th className="w-[10%] px-4 py-3 text-left text-[10px] font-semibold uppercase tracking-[0.2em] text-muted-foreground">
                  Funding Type
                </th>
                <th className="w-[10%] px-4 py-3 text-left text-[10px] font-semibold uppercase tracking-[0.2em] text-muted-foreground">
                  Drawdown Type
                </th>
                <th className="w-[6%] px-2 py-3 text-left text-[10px] font-semibold uppercase tracking-[0.2em] text-muted-foreground">
                  Max Accounts
                </th>
                <th className="w-[9%] px-2 py-3 text-left text-[10px] font-semibold uppercase tracking-[0.2em] text-muted-foreground">
                  Payout Methods
                </th>
                <th className="w-[6%] px-2 py-3 text-left text-[10px] font-semibold uppercase tracking-[0.2em] text-muted-foreground">
                  Promo
                </th>
                <th className="w-[8%] px-3 py-3 text-left text-[10px] font-semibold uppercase tracking-[0.2em] text-muted-foreground">
                  Get Deal
                </th>
              </tr>
            </thead>
            <tbody className="divide-y divide-border/70">
              {filteredFirms.length === 0 ? (
                <tr>
                  <td colSpan={10} className="px-4 py-12 text-center">
                    <div className="flex flex-col items-center gap-2">
                      <Icon
                        icon="solar:filter-bold"
                        className="h-8 w-8 text-muted-foreground"
                      />
                      <p className="text-sm text-muted-foreground">
                        No firms match your filters.
                      </p>
                      <Button
                        onClick={clearFilters}
                        variant="link"
                        className="text-primary"
                      >
                        Clear all filters
                      </Button>
                    </div>
                  </td>
                </tr>
              ) : (
                filteredFirms.map((firm) => {
                  const dealHref = firm.dealUrl || "/sign-in";
                  const isExternalDeal = dealHref.startsWith("http");

                  return (
                    <tr
                      key={firm.id}
                      className="transition-colors hover:bg-muted/20 even:bg-muted/[0.12]"
                    >
                      <td className="px-4 py-3">
                        <Link
                          href={dealHref}
                          target={isExternalDeal ? "_blank" : undefined}
                          rel={
                            isExternalDeal ? "noopener noreferrer" : undefined
                          }
                          className="group block"
                        >
                          <FirmNameCell firm={firm} />
                        </Link>
                      </td>
                      <td className="px-4 py-3">
                        <div className="space-y-0.5">
                          <div className="flex items-center gap-1">
                            <Icon
                              icon="solar:star-bold"
                              className="h-3.5 w-3.5 text-primary"
                            />
                            <span className="text-sm font-semibold text-foreground">
                              {firm.trustpilotRating.toFixed(1)}
                            </span>
                          </div>
                          <span className="text-[10px] text-muted-foreground">
                            ({firm.trustpilotReviews})
                          </span>
                        </div>
                      </td>
                      <td className="px-4 py-3">
                        <div className="flex flex-wrap gap-1">
                          {firm.platforms.map((platform) => (
                            <span
                              key={platform}
                              className="inline-flex rounded-full border border-border/70 bg-background px-2 py-0.5 text-[10px] font-medium text-muted-foreground"
                            >
                              {platform}
                            </span>
                          ))}
                        </div>
                      </td>
                      <td className="px-4 py-3">
                        <span className="text-sm font-semibold text-foreground">
                          {firm.activationFee}
                        </span>
                      </td>
                      <td className="px-4 py-3">
                        <PillList values={firm.fundingType} />
                      </td>
                      <td className="px-4 py-3">
                        <PillList values={firm.drawdownType} />
                      </td>
                      <td className="px-2 py-3">
                        <span className="text-sm font-semibold text-foreground">
                          {firm.maxAccounts}
                        </span>
                      </td>
                      <td className="px-2 py-3">
                        <PillList values={firm.payoutMethods} />
                      </td>
                      <td className="px-2 py-3">
                        <PromoCodeButton code={firm.promoCode} />
                      </td>
                      <td className="px-2 py-3">
                        <Button
                          asChild
                          size="sm"
                          className="min-w-[78px] px-2.5 text-xs font-semibold"
                        >
                          <Link
                            href={dealHref}
                            target={isExternalDeal ? "_blank" : undefined}
                            rel={
                              isExternalDeal ? "noopener noreferrer" : undefined
                            }
                          >
                            Get Deal
                          </Link>
                        </Button>
                      </td>
                    </tr>
                  );
                })
              )}
            </tbody>
          </table>
        </div>

        <div className="flex flex-col gap-4 md:hidden">
          {filteredFirms.length === 0 ? (
            <div className="flex flex-col items-center gap-2 py-12">
              <Icon
                icon="solar:filter-bold"
                className="h-8 w-8 text-muted-foreground"
              />
              <p className="text-sm text-muted-foreground">
                No firms match your filters.
              </p>
              <Button
                onClick={clearFilters}
                variant="link"
                className="text-primary"
              >
                Clear all filters
              </Button>
            </div>
          ) : (
            filteredFirms.map((firm) => <FirmCard key={firm.id} firm={firm} />)
          )}
        </div>

        <p className="mt-3 px-1 text-center text-[11px] text-muted-foreground">
          Cost to funded reflects the minimum possible amount to reach your
          first payout stage, including activation fees when applicable.
        </p>
      </div>
    </section>
  );
}
