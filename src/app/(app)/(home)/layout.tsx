import { HydrationBoundary,dehydrate } from "@tanstack/react-query";
import React, { Suspense } from "react";
import { Navbar } from "./navbar";
import { Footer } from "./footer";
import { SearchFilters, SearchFiltersSkeleton } from "./search-filters";
import { getQueryClient, trpc } from "@/trpc/server";

interface Props {
  children: React.ReactNode;
}

const Layout = async ({ children }: Props) => {

  const queryClient = getQueryClient();
  void queryClient.prefetchQuery(trpc.categories.getMany.queryOptions())

  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <HydrationBoundary state={dehydrate(queryClient)}>
        <Suspense fallback={<SearchFiltersSkeleton/>}>
          <SearchFilters/>
        </Suspense>
      </HydrationBoundary>
      <div className="flex-1 bg-[#F4F4F0]">{children}</div>
      <Footer />
    </div>
  );
};

export default Layout;
