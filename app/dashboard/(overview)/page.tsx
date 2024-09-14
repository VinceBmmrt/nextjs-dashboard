import CustomHead from "@/app/ui/CustomHead";
import CardWrapper from "@/app/ui/dashboard/cards";
import { lusitana } from "@/app/ui/fonts";
import {
  CardsSkeleton,
  LatestInvoicesSkeleton,
  RevenueChartSkeleton,
} from "@/app/ui/skeletons";
import { Metadata } from "next";
import { Suspense } from "react";
import LatestInvoices from "../../ui/dashboard/latest-invoices";
import RevenueChart from "../../ui/dashboard/revenue-chart";

export const metadata: Metadata = {
  title: "Dashboard",
  description: "View the latest invoices and revenue charts on your dashboard.",
  keywords: "dashboard, latest invoices, revenue charts, business analytics",
};

export default async function Page() {
  const { title, description, keywords } = metadata;

  const formattedKeywords = Array.isArray(keywords)
    ? keywords.join(", ")
    : keywords || "Default keywords";

  return (
    <>
      <CustomHead
        title={title || "Default title"}
        description={description || "Default description"}
        keywords={formattedKeywords}
      />

      <main>
        <h1 className={`${lusitana.className} mb-4 text-xl md:text-2xl`}>
          Dashboard
        </h1>
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          <Suspense fallback={<CardsSkeleton />}>
            <CardWrapper />
          </Suspense>
        </div>
        <div className="mt-6 grid grid-cols-1 gap-6 md:grid-cols-4 lg:grid-cols-8">
          <Suspense fallback={<RevenueChartSkeleton />}>
            <RevenueChart />
          </Suspense>
          <Suspense fallback={<LatestInvoicesSkeleton />}>
            <LatestInvoices />
          </Suspense>
        </div>
      </main>
    </>
  );
}
