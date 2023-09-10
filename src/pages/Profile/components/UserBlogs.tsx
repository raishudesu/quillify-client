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
    queryFn: () => id && getUserBlogs(id || (userId as string)),
    refetchOnWindowFocus: false,
  });

  useEffect(() => {
    id || userId ? refetch() : null;
  }, [id, userId, refetch]);

  return (
    <div>
      <div className="text-2xl font-bold text-center">My Blogs</div>
      {!isLoading && isSuccess ? (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 p-2">
          {userBlogs?.map(
            ({ author, createdAt, summary, title, _id }, index) => (
              <BlogCard
                author={author}
                createdAt={createdAt}
                summary={summary}
                title={title}
                postId={_id}
                key={index}
              />
            )
          )}
        </div>
      ) : (
        <Spinner />
      )}
    </div>
  );
};

export default UserBlogs;
