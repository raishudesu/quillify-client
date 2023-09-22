import { useParams } from "react-router-dom";
import ViewBlog from "./components/ViewBlog";
import SubHeader from "../../components/SubHeader";

const Blog = () => {
  const { postId } = useParams();
  return (
    <div className="py-6 mx-auto max-w-screen-2xl px-6 flex flex-col items-center justify-center gap-6 text-blue-gray-900 ">
      <SubHeader />
      <ViewBlog postId={postId as string} />
    </div>
  );
};

export default Blog;
