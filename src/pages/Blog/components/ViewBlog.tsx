import { useQuery } from "@tanstack/react-query";
import { useBlogs } from "../../../stores/useBlogs";
import { Spinner } from "@material-tailwind/react";

const ViewBlog = ({ postId }: { postId: string }) => {
  const { getBlog, viewBlog } = useBlogs();

  const { isLoading } = useQuery({
    queryKey: ["blog"],
    queryFn: () => getBlog(postId),
    refetchOnWindowFocus: false,
  });
  const { title, author, content, createdAt } = viewBlog || {};
  return (
    <div>
      {!isLoading ? (
        <>
          <div>{title}</div>
          <div>{author}</div>
          <div>{createdAt}</div>
          <div>{content}</div>
        </>
      ) : (
        <Spinner />
      )}
    </div>
  );
};

export default ViewBlog;
