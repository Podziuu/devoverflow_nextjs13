"use client";

import { useRouter, useSearchParams } from "next/navigation";
import { formUrlQuery, removeKeysFromQuery } from "@/lib/utils";
import { GlobalSearchFilters } from "@/constants/filters";

const GlobalFilters = () => {
  const searchParams = useSearchParams();
  const router = useRouter();

  const typeParams = searchParams.get("type");

  const clickHandler = (type: string) => {
    if(type === typeParams) {
      const newUrl = removeKeysFromQuery({
        params: searchParams.toString(),
        keysToRemove: ['type']
      })
      router.push(newUrl, {scroll: false})
    } else {
      const newUrl = formUrlQuery({
        params: searchParams.toString(),
        key: "type",
        value: type,
      })
      router.push(newUrl, {scroll: false});
    }
  };

  return (
    <div className="flex items-center gap-5 px-5">
      <p className="base-medium text-dark400_light900">Type:</p>
      <div className="flex gap-3">
        {GlobalSearchFilters.map((item) => (
          <button
            type="button"
            key={item.value}
            className={`light-border-2 small-medium rounded-2xl px-5 py-2 capitalize dark:text-light-800 ${
              typeParams === item.value
                ? "bg-primary-500 text-light-900"
                : "bg-light-700 text-dark-400 hover:text-primary-500 dark:bg-dark-500"
            }`}
            onClick={() => clickHandler(item.value)}
          >
            {item.name}
          </button>
        ))}
      </div>
    </div>
  );
};

export default GlobalFilters;
