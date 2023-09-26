import { useQuery } from "@tanstack/react-query";
import { useBlogs } from "../../../stores/useBlogs";
import { Spinner, Typography } from "@material-tailwind/react";
import { TBlogs } from "../../../lib/types";
import ModifyBlog from "./ModifyBlog";
import SideBar from "../../../components/SideBar";
import Tags from "./Tags";
import { DateTime } from "luxon";

const ViewBlog = ({ postId }: { postId: string }) => {
  const { getBlog, viewBlog } = useBlogs();

  const { isLoading } = useQuery({
    queryKey: ["blog"],
    queryFn: () => getBlog(postId),
    refetchOnWindowFocus: false,
  });
  const { title, author, content, createdAt, authorId, tags } = viewBlog || {};

  const formattedDate = DateTime.fromISO(createdAt as string).toFormat(
    "MMMM dd, yyyy"
  );
  return (
    <div className="w-full min-h-screen">
      <div className="w-full flex">
        <div className="hidden lg:block">
          <SideBar />
        </div>
        <div className="w-full flex flex-col gap-10 justify-center items-center overflow-hidden">
          {!isLoading ? (
            <div className="w-full">
              <div className="w-full flex flex-col gap-2 justify-start items-start">
                <div className="font-bold text-2xl">{title}</div>
                <div className="font-semibold text-xl mb-2">
                  <em>by {author}</em>
                </div>
                <Tags tags={tags as string[]} />
                <div className="">{formattedDate}</div>
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
          <Typography>DevInk for Devs @2023</Typography>
        </div>
      </div>
    </div>
  );
};

export default ViewBlog;
