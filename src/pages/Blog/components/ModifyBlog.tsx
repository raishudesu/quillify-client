import { Button } from "@material-tailwind/react";
import { useAuth } from "../../../stores/useAuth";
import { useBlogs } from "../../../stores/useBlogs";

const ModifyBlog = ({
  authorId,
  postId,
}: {
  authorId: string;
  postId: string;
}) => {
  const { currentUser } = useAuth();
  const { deletePost } = useBlogs();
  const handleDeletePost = () => {
    deletePost(postId, currentUser?.token as string);
    alert("Post deleted!");
  };
  if ((authorId === currentUser?.userId || currentUser?.id) && authorId) {
    return (
      <div className="flex gap-4">
        <Button color="purple">Edit post</Button>
        <Button color="red" variant="outlined" onClick={handleDeletePost}>
          Delete post
        </Button>
      </div>
    );
  } else {
    return null;
  }
};

export default ModifyBlog;
