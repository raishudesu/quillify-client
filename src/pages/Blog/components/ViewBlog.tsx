import { useQuery } from "@tanstack/react-query";
import { useBlogs } from "../../../stores/useBlogs";
import { Spinner } from "@material-tailwind/react";
import { TBlogs } from "../../../lib/types";
import ModifyBlog from "./ModifyBlog";

const ViewBlog = ({ postId }: { postId: string }) => {
  const { getBlog, viewBlog } = useBlogs();

  const { isLoading } = useQuery({
    queryKey: ["blog"],
    queryFn: () => getBlog(postId),
    refetchOnWindowFocus: false,
  });
  const { title, author, content, createdAt, authorId } = viewBlog || {};
  return (
    <div className="min-h-screen">
      {!isLoading ? (
        <>
          <div className="flex flex-col gap-2">
            <div className="font-bold text-2xl">{title}</div>
            <div className="font-semibold text-xl">
              <em>by {author}</em>
            </div>
            <div className="">Posted at: {createdAt}</div>
            <ModifyBlog authorId={authorId as string} postId={postId} />
          </div>

          <div
            dangerouslySetInnerHTML={{ __html: content as TBlogs }}
            className="flex flex-col justify-center items-center text-xl"
          />
        </>
      ) : (
        <Spinner />
      )}
    </div>
  );
};

export default ViewBlog;
