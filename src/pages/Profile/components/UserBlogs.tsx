import { useEffect } from "react";
import { Spinner } from "@material-tailwind/react";
import { useBlogs } from "../../../stores/useBlogs";
import { useQuery } from "@tanstack/react-query";
import BlogCard from "../../../components/BlogCard";
import { useAuth } from "../../../stores/useAuth";

const UserBlogs = () => {
  const { userBlogs, getUserBlogs } = useBlogs();
  const { currentUser } = useAuth();
  const { id, userId } = currentUser || {};

  const { isLoading, isSuccess, refetch } = useQuery({
    queryKey: ["userblogs"],
    queryFn: () => getUserBlogs(id || (userId as string)),
    refetchOnWindowFocus: false,
  });

  useEffect(() => {
    id || userId ? refetch() : null;
  }, [id, userId, refetch]);

  return (
    <div className="w-full">
      <div className="w-full text-2xl font-bold text-center">My Blogs</div>
      <div className="flex w-full justify-center min-h-screen">
        {!isLoading && isSuccess ? (
          <div className="w-full flex flex-col gap-6 p-2">
            {!(userBlogs?.length === undefined) ? (
              userBlogs?.map(
                ({ author, createdAt, summary, title, _id, tags }, index) => (
                  <BlogCard
                    author={author}
                    createdAt={createdAt}
                    summary={summary}
                    title={title}
                    postId={_id}
                    tags={tags}
                    key={index}
                  />
                )
              )
            ) : (
              <>No blogs</>
            )}
          </div>
        ) : (
          <Spinner />
        )}
      </div>
    </div>
  );
};

export default UserBlogs;
