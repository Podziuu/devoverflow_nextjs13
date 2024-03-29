import Question from "@/components/froms/Question";
import { getQuestionById } from "@/lib/actions/question.action";
import { getUserById } from "@/lib/actions/user.action";
import { auth } from "@clerk/nextjs";
import { redirect } from "next/navigation";
import React from "react";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Edit Question | Dev Overflow",
};

const page = async ({ params }: any) => {
  const { id } = params;
  const { userId } = auth();

  if (!userId) redirect("/sign-in");

  const mongoUser = await getUserById({ userId });

  const question = await getQuestionById({ questionId: id });

  return (
    <>
      <h1 className="h1-bold text-dark100_light900">Edit Question</h1>
      <div className="mt-9">
        <Question
          type="edit"
          mongoUserId={JSON.stringify(mongoUser?._id)}
          question={JSON.stringify(question)}
        />
      </div>
    </>
  );
};

export default page;
