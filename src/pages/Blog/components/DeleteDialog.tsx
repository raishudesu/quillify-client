import { useState } from "react";
import {
  Button,
  Dialog,
  DialogHeader,
  DialogBody,
  DialogFooter,
} from "@material-tailwind/react";
import { useAuth } from "../../../stores/useAuth";
import { useBlogs } from "../../../stores/useBlogs";
import { useNavigate } from "react-router-dom";

const DeleteDialog = ({ postId }: { postId: string }) => {
  const navigate = useNavigate();
  const [open, setOpen] = useState(false);

  const handleOpen = () => setOpen(!open);
  const { currentUser } = useAuth();
  const { deletePost } = useBlogs();
  const handleDeletePost = () => {
    try {
      deletePost(
        currentUser?.id as string,
        postId,
        currentUser?.token as string
      );
      navigate("/profile");
    } catch (error) {
      console.log(error);
    } finally {
      handleOpen();
    }
  };

  return (
    <>
      <Button variant="outlined" color="red" onClick={handleOpen}>
        Delete
      </Button>
      <Dialog open={open} size={"xs"} handler={handleOpen}>
        <DialogHeader>Are you sure?</DialogHeader>
        <DialogBody divider>This action cannot be undone.</DialogBody>
        <DialogFooter>
          <Button
            variant="text"
            color="red"
            onClick={() => handleOpen()}
            className="mr-1"
          >
            <span>Cancel</span>
          </Button>
          <Button variant="gradient" color="purple" onClick={handleDeletePost}>
            <span>Confirm</span>
          </Button>
        </DialogFooter>
      </Dialog>
    </>
  );
};

export default DeleteDialog;
