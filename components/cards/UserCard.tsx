import Image from "next/image";
import RenderTag from "../shared/RenderTag";
import { getTopInteractedTags } from "@/lib/actions/tag.action";
import Link from "next/link";
import { Badge } from "../ui/badge";

interface Props {
  user: {
    _id: string;
    clerkId: string;
    name: string;
    username: string;
    picture: string;
  };
}

const UserCard = async ({ user }: Props) => {
  const topTags = await getTopInteractedTags({ userId: user._id });

  return (
    <Link
      href={`/profile/${user.clerkId}`}
      className="shadow-light100_darknone w-full max-xs:min-w-full xs:w-[260px]"
    >
      <article className="background-light900_dark200 light-border flex w-full flex-col items-center justify-center rounded-2xl border p-8">
        <Image
          src={user.picture}
          alt={user.name}
          width={100}
          height={100}
          className="rounded-full"
        />
        <div className="mt-4 text-center">
          <h3 className="text-dark200_light900 h3-bold line-clamp-1">
            {user.name}
          </h3>
          <p className="text-dark500_light500 body-regular mt-2">
            @{user.username}
          </p>
        </div>
        <div className="mt-5">
          {topTags.length > 0 ? (
            <div className="flex items-center gap-2">
              {topTags.map((tag) => (
                <RenderTag key={tag._id} name={tag.name} _id={tag._id} />
              ))}
            </div>
          ) : (
            <Badge>No tags yet</Badge>
          )}
        </div>
      </article>
    </Link>
  );
};

export default UserCard;
