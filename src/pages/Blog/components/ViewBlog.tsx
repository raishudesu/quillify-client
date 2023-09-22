import { useQuery } from "@tanstack/react-query";
import { useBlogs } from "../../../stores/useBlogs";
import { Spinner } from "@material-tailwind/react";
import { TBlogs } from "../../../lib/types";
import ModifyBlog from "./ModifyBlog";
import SideBar from "../../../components/SideBar";

const ViewBlog = ({ postId }: { postId: string }) => {
  const { getBlog, viewBlog } = useBlogs();

  const { isLoading } = useQuery({
    queryKey: ["blog"],
    queryFn: () => getBlog(postId),
    refetchOnWindowFocus: false,
  });
  const { title, author, content, createdAt, authorId } = viewBlog || {};
  return (
    <div className="w-full min-h-screen">
      <div className="w-full flex">
        <div className="hidden lg:block">
          <SideBar />
        </div>
        <div className="w-full flex justify-center items-center overflow-hidden">
          {!isLoading ? (
            <div className="w-full">
              <div className="w-full flex flex-col gap-2">
                <div className="font-bold text-2xl">{title}</div>
                <div className="font-semibold text-xl">
                  <em>by {author}</em>
                </div>
                <div className="">Posted at: {createdAt}</div>
                <ModifyBlog authorId={authorId as string} postId={postId} />
              </div>
              <div
                dangerouslySetInnerHTML={{ __html: content as TBlogs }}
                className="w-full mt-6 gap-1 text-lg text-start"
              />
            </div>
          ) : (
            <Spinner />
          )}
        </div>
      </div>
    </div>
  );
};

export default ViewBlog;
