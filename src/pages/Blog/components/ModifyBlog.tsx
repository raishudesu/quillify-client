import { Button } from "@material-tailwind/react";
import { useAuth } from "../../../stores/useAuth";
import { useNavigate } from "react-router-dom";
import DeleteDialog from "./DeleteDialog";

const ModifyBlog = ({
  authorId,
  postId,
}: {
  authorId: string;
  postId: string;
}) => {
  const navigate = useNavigate();
  const { currentUser } = useAuth();

  const handleEditPost = () => {
    navigate("/profile/editBlog");
  };

  if (
    (authorId === currentUser?.userId || authorId === currentUser?.id) &&
    authorId
  ) {
    return (
      <div className="flex gap-4">
        <Button color="purple" onClick={handleEditPost}>
          Edit post
        </Button>
        <DeleteDialog postId={postId} />
      </div>
    );
  } else {
    return null;
  }
};

export default ModifyBlog;
