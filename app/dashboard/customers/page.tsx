import { fetchCustomerPages } from "@/app/lib/data";
import CustomHead from "@/app/ui/CustomHead";
import { lusitana } from "@/app/ui/fonts";
import Pagination from "@/app/ui/invoices/pagination";
import { CustomersTable } from "@/app/ui/invoices/table";
import Search from "@/app/ui/search";
import { InvoicesTableSkeleton } from "@/app/ui/skeletons";
import { Metadata } from "next";
import { Suspense } from "react";

export const metadata: Metadata = {
  title: "Customers",
  description: "View all your customers and their invoices.",
  keywords: "customers, invoices, business analytics",
};

export default async function Page({
  searchParams,
}: {
  searchParams?: {
    query?: string;
    page?: string;
  };
}) {
  const query = searchParams?.query || "";
  const currentPage = Number(searchParams?.page) || 1;

  const totalPages = await fetchCustomerPages(query);

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
      <div className="w-full">
        <div className="flex w-full items-center justify-between">
          <h1 className={`${lusitana.className} text-2xl`}>Customers</h1>
        </div>
        <div className="mt-4 flex items-center justify-between gap-2 md:mt-8">
          <Search placeholder="Search Customers..." />
        </div>
        <Suspense
          key={query + currentPage}
          fallback={<InvoicesTableSkeleton />}
        >
          <CustomersTable query={query} currentPage={currentPage} />
        </Suspense>
        <div className="mt-5 flex w-full justify-center">
          <Pagination totalPages={totalPages} />
        </div>
      </div>
    </>
  );
}
