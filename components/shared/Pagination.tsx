"use client";

import { formUrlQuery } from "@/lib/utils";
import { Button } from "../ui/button";
import { useRouter, useSearchParams } from "next/navigation";

interface Props {
  pageNumber: number;
  isNext: boolean;
}

const Pagination = ({pageNumber, isNext}: Props) => {
  const searchParams = useSearchParams();
  const router = useRouter();
  const clickHandler = (direction: string) => {
    const nextPageNumber = direction === "Prev" ? pageNumber - 1 : pageNumber + 1;

    const newUrl = formUrlQuery({
      params: searchParams.toString(),
      key: "page",
      value: nextPageNumber.toString(),
    })
    router.push(newUrl);
  };

  if(!isNext && pageNumber === 1) return null;

  return (
    <div className="flex w-full items-center justify-center gap-2">
      <Button
        className="light-border-2 btn background-light800_dark400 shadow-light100_dark100 flex min-h-[36px] justify-center gap-2 border"
        onClick={() => clickHandler("Prev")}
        disabled={pageNumber === 1}
      >
        <p className="body-medium text-dark200_light800">Prev</p>
      </Button>
      <div className="flex items-center justify-center rounded-md bg-primary-500 px-3.5 py-2">
        <p className="body-semibold text-light-900">{pageNumber}</p>
      </div>
      <Button
        className="light-border-2 btn background-light800_dark400 shadow-light100_dark100 flex min-h-[36px] justify-center gap-2 border"
        onClick={() => clickHandler("Next")}
        disabled={!isNext}
      >
        <p className="body-medium text-dark200_light800">Next</p>
      </Button>
    </div>
  );
};

export default Pagination;
