import { Skeleton } from "@/components/ui/skeleton";
import React from "react";

const Loading = () => {
  return (
    <div className="flex flex-col">
      <h1 className="h1-bold text-dark100_light900">Edit Profile</h1>
      <div className="mt-9 flex flex-col gap-16">
        {[1, 2, 3, 4, 5].map((item) => (
          <Skeleton key={item} className="h-16 w-full" />
        ))}
      </div>

      <Skeleton className="mt-8 h-12 w-36 self-end" />
    </div>
  );
};

export default Loading;
