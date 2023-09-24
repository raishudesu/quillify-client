import { Spinner } from "@material-tailwind/react";
import BlogCard from "../../components/BlogCard";
import { useBlogs } from "../../stores/useBlogs";
import { useQuery } from "@tanstack/react-query";
import SideBar from "../../components/SideBar";
import SubHeader from "../../components/SubHeader";

const Search = () => {
  const { searchedBlogs, searchBlogs } = useBlogs();

  const { isLoading } = useQuery({
    queryKey: ["searchBlogs"],
    queryFn: () => searchBlogs,
    refetchOnWindowFocus: false,
  });
  return (
    <div className="py-6 mx-auto max-w-screen-2xl px-6 flex flex-col items-center justify-center gap-6 text-blue-gray-900 ">
      <SubHeader />
      <div className="flex w-full">
        <div className="hidden lg:block">
          <SideBar />
        </div>
        <div className="flex w-full justify-center min-h-screen">
          {!isLoading ? (
            <div className="w-full flex flex-col gap-6 p-2">
              <div className="text-2xl font-bold text-center">Blogs</div>
              {searchedBlogs?.length === 0 ? (
                <div className="text-center text-gray-500">
                  No blogs found matching your search.
                </div>
              ) : (
                searchedBlogs?.map(
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
              )}
            </div>
          ) : (
            <Spinner />
          )}
        </div>
      </div>
    </div>
  );
};

export default Search;
