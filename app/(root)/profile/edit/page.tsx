import Profile from "@/components/froms/Profile";
import { getUserById } from "@/lib/actions/user.action";
import { auth } from "@clerk/nextjs";
import { redirect } from "next/navigation";
import React from "react";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Edit Profile | Dev Overflow",
};

const Page = async () => {
  const { userId } = auth();

  if (!userId) redirect("/sign-in");

  const mongoUser = await getUserById({ userId });

  return (
    <>
      <h1 className="h1-bold text-dark100_light900">Edit Profile</h1>
      <div className="mt-9">
        <Profile user={JSON.stringify(mongoUser)} clerkId={userId} />
      </div>
    </>
  );
};

export default Page;
