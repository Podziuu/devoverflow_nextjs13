"use server";

import Question from "@/database/question.model";
import { connectToDatabase } from "../mongoose";
import { SearchParams } from "./shared.types";
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
