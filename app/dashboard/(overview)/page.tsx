import CardWrapper from "@/app/ui/dashboard/cards";
import { lusitana } from "@/app/ui/fonts";
import {
  CardsSkeleton,
  LatestInvoicesSkeleton,
  RevenueChartSkeleton,
} from "@/app/ui/skeletons";
import { Suspense } from "react";
import { fetchCardData } from "../../lib/data";
import LatestInvoices from "../../ui/dashboard/latest-invoices";
import RevenueChart from "../../ui/dashboard/revenue-chart";
export default async function Page() {
  const {
    totalPaidInvoices,
    numberOfInvoices,
    totalPendingInvoices,
    numberOfCustomers,
  } = await fetchCardData();

  return (
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
  );
}
