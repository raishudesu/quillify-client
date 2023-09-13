import {
  Card,
  CardBody,
  CardFooter,
  Typography,
  Avatar,
  Tooltip,
} from "@material-tailwind/react";
import { useNavigate } from "react-router-dom";

const BlogCard = ({
  title,
  summary,
  createdAt,
  author,
  postId,
}: {
  title: string;
  summary: string;
  createdAt: string;
  author: string;
  postId: string;
}) => {
  const navigate = useNavigate();
  return (
    <Card
      className=" w-full overflow-hidden hover:shadow-purple-500 transition ease-in-out delay-100 cursor-pointer"
      onClick={() => navigate(`/blog/${postId}`)}
    >
      <CardBody>
        <Typography variant="h5" color="blue-gray">
          {title}
        </Typography>
        <Typography
          variant="paragraph"
          color="gray"
          className="mt-3 font-normal"
        >
          {summary}
        </Typography>
      </CardBody>
      <CardFooter className="flex items-center justify-between">
        <div className="flex items-center -space-x-3">
          <Tooltip content={author}>
            <Avatar
              size="sm"
              variant="circular"
              alt="natali craig"
              src="https://images.unsplash.com/photo-1580489944761-15a19d654956?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1061&q=80"
              className="border-2 border-white hover:z-10"
            />
          </Tooltip>
        </div>
        <Typography className="font-xs">{createdAt}</Typography>
      </CardFooter>
    </Card>
  );
};

export default BlogCard;
