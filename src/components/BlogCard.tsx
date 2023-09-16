import { UserCircleIcon } from "@heroicons/react/24/solid";
import {
  Card,
  CardBody,
  CardFooter,
  Typography,
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
            <UserCircleIcon className="h-8 w-8" />
          </Tooltip>
        </div>
        <Typography className="font-xs">{createdAt}</Typography>
      </CardFooter>
    </Card>
  );
};

export default BlogCard;
