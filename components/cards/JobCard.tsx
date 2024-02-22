import Image from "next/image";
import React from "react";
import { Badge } from "../ui/badge";
import Link from "next/link";

interface Props {
  job: {
    id: string;
    employer: string;
    employerLogo: string;
    title: string;
    employerWebsite: string;
    employmentType: string;
    jobLink: string;
    city: string;
    country: string;
    description: string;
  };
}

const JobCard = ({ job }: Props) => {
  return (
    <div className="background-light900_dark300 light-border relative flex gap-6 rounded-lg p-6">
      <Link href={job.employerWebsite || "/"}>
        <Image
          src={job.employerLogo || "/assets/images/site-logo.svg"}
          alt={job.employer}
          width={64}
          height={64}
          className="!size-16 self-start"
        />
      </Link>
      <div className="w-full">
        <div className="flex w-full justify-between">
          <div className="flex gap-6">
            <h4 className="body-semibold text-dark200_light900 line-clamp-1 max-w-[75%] truncate text-wrap">
              {job.title}
            </h4>
            <Badge className="text-light400_light500 background-light800_dark400 subtle-medium max-lg:hidden">
              {job.employmentType}
            </Badge>
          </div>
          <span className="body-regular text-dark500_light700">
            {job.city}, {job.country}
          </span>
        </div>
        <div className="flex justify-between">
          <p className="body-regular text-dark500_light700 mt-3 line-clamp-3 max-w-[65%]">
            {job.description}
          </p>
          <Link
            target="_blank"
            href={job.jobLink}
            className="flex gap-2 self-end text-primary-500"
          >
            View Job
            <Image
              src={"/assets/icons/arrow-up-right.svg"}
              height={20}
              width={20}
              alt="arrow-up-right"
            />
          </Link>
        </div>
      </div>
      {/* <div className="float-right flex flex-col justify-between">
        <div>Warsaw</div>
        <Link href={job.jobLink}>View Job</Link>
      </div> */}
    </div>
  );
};

export default JobCard;
