import {
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  Typography,
  Button,
} from "@material-tailwind/react";
import { useAuth } from "../../../stores/useAuth";
import { useNavigate } from "react-router-dom";
import { UserCircleIcon } from "@heroicons/react/24/outline";
import { DateTime } from "luxon";

const ProfileCard = () => {
  const { currentUser } = useAuth();
  const { username, createdAt, email } = currentUser || {};
  const navigate = useNavigate();

  const formattedDate = DateTime.fromISO(createdAt as string).toFormat(
    "MMMM dd, yyyy"
  );
  return (
    <Card className="w-full flex flex-col items-center">
      <CardHeader className="rounded-full max-w-xs shadow-lg  overflow-hidden">
        <UserCircleIcon className="h-32 w-32" />
      </CardHeader>
      <CardBody className="text-center flex flex-col justify-center items-center break-all">
        <Typography variant="h4" color="blue-gray" className="mb-2">
          <>{username}</>
        </Typography>
        <Typography variant="paragraph" color="purple">
          <>@{email}</>
        </Typography>
        <div className="flex">
          🎂
          <Typography color="blue-gray" className="font-medium" textGradient>
            Joined at {formattedDate}
          </Typography>
        </div>
      </CardBody>
      <CardFooter className="flex justify-center gap-7 pt-2">
        <Button color="purple" onClick={() => navigate("/profile/createBlog")}>
          Create post
        </Button>
        <Button
          color="purple"
          variant="outlined"
          onClick={() => navigate("/profile/settings")}
        >
          Edit profile
        </Button>
      </CardFooter>
    </Card>
  );
};

export default ProfileCard;
