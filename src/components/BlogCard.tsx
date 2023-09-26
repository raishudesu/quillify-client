import { UserCircleIcon } from "@heroicons/react/24/solid";
import {
  Card,
  CardBody,
  CardFooter,
  Typography,
  Tooltip,
  Chip,
} from "@material-tailwind/react";
import { useNavigate } from "react-router-dom";
import { DateTime } from "luxon";

const BlogCard = ({
  title,
  summary,
  createdAt,
  author,
  postId,
  tags,
}: {
  title: string;
  summary: string;
  createdAt: string;
  author: string;
  postId: string;
  tags: string[];
}) => {
  const navigate = useNavigate();

  const formattedDate = DateTime.fromISO(createdAt).toFormat("MMMM dd, yyyy");

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
        <div className="flex gap-2 flex-wrap mt-4">
          {tags.map((tag, index) => (
            <Chip key={index} value={tag} variant="ghost" />
          ))}
        </div>
      </CardBody>
      <CardFooter className="flex items-center gap-4 justify-between">
        <div className="flex items-center -space-x-3">
          <Tooltip content={author}>
            <UserCircleIcon className="h-8 w-8" />
          </Tooltip>
        </div>

        <Typography className="font-xs">{formattedDate}</Typography>
      </CardFooter>
    </Card>
  );
};

export default BlogCard;
