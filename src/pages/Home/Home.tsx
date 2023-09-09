import BlogCard from "../../components/BlogCard";
import Community from "./components/Community";
import Features from "./components/Features";
import Hero from "./components/Hero";
import { useBlogs } from "../../stores/useBlogs";
import { useQuery } from "@tanstack/react-query";
import { Spinner } from "@material-tailwind/react";

const Home = () => {
  const { blogs, getBlogs } = useBlogs();
  const { isLoading } = useQuery({
    queryKey: ["blogs"],
    queryFn: getBlogs,
    refetchOnWindowFocus: false,
  });
  return (
    <div className="py-6 mx-auto max-w-screen-2xl px-6 flex flex-col items-center justify-center gap-24 text-blue-gray-900">
      <Hero />
      <Features />
      <Community />
      <div className="w-full flex flex-col justify-between items-center gap-3">
        <div className="text-2xl font-bold">Recent blogs</div>
        {!isLoading ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 p-2">
            {blogs
              ?.slice(0, 3)
              .map(({ author, createdAt, summary, title, _id }, index) => (
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
    </div>
  );
};

export default Home;
