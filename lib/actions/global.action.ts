"use server";

import Question from "@/database/question.model";
import { connectToDatabase } from "../mongoose";
import { JobFilterParams, SearchParams } from "./shared.types";
import Tag from "@/database/tag.model";
import User from "@/database/user.modal";
import Answer from "@/database/answer.model";

const SearchableTypes = ["question", "answer", "tag", "user"];

export async function globalSearch(params: SearchParams) {
  try {
    connectToDatabase();

    const { query, type } = params;
    const regExpression = { $regex: query, $options: "i" };

    let results = [];

    const modelsAndTypes = [
      { model: Question, searchField: "title", type: "question" },
      { model: User, searchField: "name", type: "user" },
      { model: Answer, searchField: "content", type: "answer" },
      { model: Tag, searchField: "name", type: "tag" },
    ];

    const typeLower = type?.toLowerCase();

    if (!typeLower || !SearchableTypes.includes(typeLower)) {
      // SEARCH ALL TYPES
      for (const { model, searchField, type } of modelsAndTypes) {
        const queryResults = await model
          .find({ [searchField]: regExpression })
          .limit(2);

        results.push(
          ...queryResults.map((result) => ({
            title:
              type === "answer"
                ? `Answers containing ${query}`
                : result[searchField],
            type,
            id:
              type === "user"
                ? result.clerkid
                : type === "answer"
                  ? result.question
                  : result._id,
          }))
        );
      }
    } else {
      // SEARCH FOR SPECIFIC TYPE
      const modelInfo = modelsAndTypes.find(
        (modelInfo) => modelInfo.type === type
      );

      if (!modelInfo) {
        throw new Error("Invalid search type");
      }

      const queryResults = await modelInfo.model
        .find({ [modelInfo.searchField]: regExpression })
        .limit(8);

      results = queryResults.map((result) => ({
        title:
          type === "answer"
            ? `Answers containing ${query}`
            : result[modelInfo.searchField],
        type,
        id:
          type === "user"
            ? result.clerkid
            : type === "answer"
              ? result.question
              : result._id,
      }));
    }

    return JSON.stringify(results);
  } catch (error) {
    console.log(error);
    throw error;
  }
}

export async function getCountires() {
  try {
    const res = await fetch("https://restcountries.com/v3.1/all?fields=name");

    const countires = await res.json();

    const countiresName = countires.map((country: any) => {
      return {
        name: country.name.common,
        value: country.name.common.toLowerCase(),
      };
    });

    return countiresName;
  } catch (error) {
    console.log(error);
    throw error;
  }
}

export async function getJobs(params: JobFilterParams) {
  try {
    const {
      query = "Nextjs%20developer",
      filter = "poland",
      page = 1,
    } = params;

    let options = "?";

    if (query) {
      options += `query=${query}%20in%20${filter}&`;
    }
    if (page) {
      options += `page=${page}&num_pages=1`;
    }

    const res = await fetch(`https://jsearch.p.rapidapi.com/search${options}`, {
      method: "GET",
      // @ts-ignore
      headers: {
        "X-RapidAPI-Key": process.env.RAPIDAPI_KEY,
        "X-RapidAPI-Host": "jsearch.p.rapidapi.com",
      },
    });

    const data = await res.json();

    const jobsData = data.data.map((job: any) => {
      return {
        id: job.job_id,
        employer: job.employer_name,
        employerLogo: job.employer_logo,
        title: job.job_title,
        employerWebsite: job.employer_website,
        employmentType: job.job_employment_type,
        jobLink: job.job_apply_link,
        city: job.job_city,
        country: job.job_country,
        description: job.job_description,
      };
    });
    return jobsData;
  } catch (error) {
    console.log(error);
    throw error;
  }
}
