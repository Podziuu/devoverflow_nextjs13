import { Skeleton } from "@/components/ui/skeleton";
import React from "react";

const Loading = () => {
  return (
    <section className="flex flex-col">
      <div className="flex-start w-full flex-col">
        <div className="flex w-full flex-col-reverse justify-between gap-5 sm:flex-row sm:items-center sm:gap-2">
          <Skeleton className="h-8 w-36" />
          <div className="flex justify-end">
            <Skeleton className="h-8 w-64" />
          </div>
        </div>
        <Skeleton className="mt-3.5 h-8 w-64 self-start" />
      </div>

      <div className="mb-8 mt-5 flex flex-wrap gap-4">
        {[1, 2, 3].map((item) => (
          <Skeleton key={item} className="h-8 w-24" />
        ))}
      </div>

      <Skeleton className="h-72 w-full" />

      <div className="mt-8 flex flex-wrap gap-2">
        {[1, 2, 3].map((item) => (
          <Skeleton key={item} className="h-8 w-24" />
        ))}
      </div>

      <div className="mt-8 flex justify-between">
        <Skeleton className="h-8 w-24" />
        <Skeleton className="h-8 w-36" />
      </div>

      <div className="mt-8 flex flex-col">
        <Skeleton className="h-8 w-64" />
        <Skeleton className="mt-3 h-72 w-full" />
      </div>

      <div className="mt-8 flex justify-between">
        <Skeleton className="h-8 w-24" />
        <Skeleton className="h-8 w-36" />
      </div>

      <Skeleton className="mt-4 h-72 w-full" />

      <Skeleton className="mt-4 h-8 w-24 self-end" />
    </section>
  );
};

export default Loading;
