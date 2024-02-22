"use client";

import React, { useCallback, useEffect } from "react";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { SelectGroup } from "@radix-ui/react-select";
import { useRouter, useSearchParams } from "next/navigation";
import { formUrlQuery } from "@/lib/utils";

interface Props {
  filters: {
    name: string;
    value: string;
  }[];
  otherClasses?: string;
  containerClasses?: string;
  defaultFilter?: string;
}

const Filter = ({ filters, otherClasses, containerClasses, defaultFilter }: Props) => {
  const searchParams = useSearchParams();
  const router = useRouter();
  const filter = searchParams.get("filter");
  const handleValueChange = useCallback((value: string) => {
    const newUrl = formUrlQuery({
      params: searchParams.toString(),
      key: "filter",
      value,
    });

    router.push(newUrl, { scroll: false });
  }, [searchParams, router]);

  useEffect(() => {
    if (defaultFilter) {
      handleValueChange(defaultFilter);
    }
  }, [defaultFilter, handleValueChange])

  return (
    <div className={`relative ${containerClasses}`}>
      <Select
        defaultValue={filter || defaultFilter || undefined}
        onValueChange={handleValueChange}
      >
        <SelectTrigger
          className={`${otherClasses} body-regular light-border background-light800_dark300 text-dark500_light700 border px-5 py-2.5`}
        >
          <div className="line-clamp-1 flex-1 text-left">
            <SelectValue placeholder="Select a Filter" />
          </div>
        </SelectTrigger>
        <SelectContent className="text-dark500_light700 small-regular max-h-[280px] w-56 overflow-y-auto border-none bg-light-900 dark:bg-dark-300">
          <SelectGroup>
            {filters.map((filter) => (
              <SelectItem
                key={filter.value}
                value={filter.value}
                className="cursor-pointer focus:bg-light-800 dark:focus:bg-dark-400"
              >
                {filter.name}
              </SelectItem>
            ))}
          </SelectGroup>
        </SelectContent>
      </Select>
    </div>
  );
};

export default Filter;
