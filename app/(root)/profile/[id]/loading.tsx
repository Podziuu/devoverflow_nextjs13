import { Skeleton } from "@/components/ui/skeleton";
import React from "react";

const loading = () => {
  return (
    <div className="flex flex-col">
      <Skeleton className="h-56 w-full" />
      <Skeleton className="mt-8 h-8 w-24" />
      <div className="mt-6 flex gap-4">
        {[1, 2, 3, 4].map((item) => (
          <Skeleton key={item} className="h-36 w-full" />
        ))}
      </div>

      <Skeleton className="mt-6 h-10 w-36" />

      <div className="mt-3 flex flex-col gap-6">
        {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map((item) => (
          <Skeleton key={item} className="h-48 w-full rounded-xl" />
        ))}
      </div>
    </div>
  );
};

export default loading;
