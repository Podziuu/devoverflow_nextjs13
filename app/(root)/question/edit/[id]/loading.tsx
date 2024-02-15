import { Skeleton } from "@/components/ui/skeleton";
import React from "react";

const Loading = () => {
  return (
    <div>
      <h1 className="h1-bold text-dark100_light900">Ask a question</h1>
      <div className="mt-9 flex flex-col gap-16">
        <Skeleton className="h-16 w-full" />
        <Skeleton className="h-96 w-full" />
        <Skeleton className="h-16 w-full" />
        <Skeleton className="h-8 w-24" />
      </div>
    </div>
  );
};

export default Loading;
