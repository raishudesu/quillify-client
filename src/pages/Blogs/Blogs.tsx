import { Spinner } from "@material-tailwind/react";
import BlogCard from "../../components/BlogCard";
import { useBlogs } from "../../stores/useBlogs";
import { useQuery } from "@tanstack/react-query";

const Blogs = () => {
  const { blogs, getBlogs } = useBlogs();

  const { isLoading } = useQuery({
    queryKey: ["blogs"],
    queryFn: getBlogs,
    refetchOnWindowFocus: false,
  });
  return (
    <div className="py-6 mx-auto max-w-screen-2xl px-6 flex flex-col items-center justify-center gap-6 text-blue-gray-900 ">
      <div className="text-2xl font-bold">Blogs</div>
      {!isLoading ? (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 p-2">
          {blogs?.map(({ author, createdAt, summary, title, _id }, index) => (
            <BlogCard
              author={author}
              createdAt={createdAt}
              summary={summary}
              title={title}
              postId={_id}
              key={index}
            />
          ))}
        </div>
      ) : (
        <Spinner />
      )}
    </div>
  );
};

export default Blogs;
