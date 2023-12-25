"use client";

import Image from "next/image";
import { usePathname, useRouter } from "next/navigation";
import { useToast } from "@/components/ui/use-toast";
import { deleteQuestion } from "@/lib/actions/question.action";
import { deleteAnswer } from "@/lib/actions/answer.action";

interface Props {
  type: "question" | "answer";
  itemId: string;
}

const EditDelete = ({ type, itemId }: Props) => {
  const pathname = usePathname();
  const { toast } = useToast();
  const router = useRouter();
  const handleEdit = () => {
    if (type === "question") {
      toast({ title: "Edit question" });
      router.push(`/question/edit/${JSON.parse(itemId)}`);
    }
  };

  const handleDelete = async () => {
    if (type === "question") {
      // call delete questio action
      await deleteQuestion({questionId: JSON.parse(itemId), path: pathname});
      toast({ title: "Delete question" });
    } else if (type === "answer") {
      // call delete answer action
      await deleteAnswer({answerId: JSON.parse(itemId), path: pathname});
      toast({ title: "Delete Answer" });
    }
  };

  return (
    <div className="flex items-center justify-end gap-3 max-sm:w-full">
      {type === "question" && (
        <Image
          src="/assets/icons/edit.svg"
          width={14}
          height={14}
          alt="edit icon"
          className="cursor-pointer object-contain"
          onClick={handleEdit}
        />
      )}
      <Image
        src="/assets/icons/trash.svg"
        width={14}
        height={14}
        alt="delete icon"
        className="cursor-pointer object-contain"
        onClick={handleDelete}
      />
    </div>
  );
};

export default EditDelete;
