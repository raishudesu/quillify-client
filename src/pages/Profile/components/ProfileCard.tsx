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
import { UserCircleIcon } from "@heroicons/react/24/solid";

const ProfileCard = () => {
  const { currentUser } = useAuth();
  const { username, createdAt, email } = currentUser || {};
  const navigate = useNavigate();
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
        <Typography color="blue-gray" className="font-medium" textGradient>
          <>Joined at {createdAt}</>
        </Typography>
      </CardBody>
      <CardFooter className="flex justify-center gap-7 pt-2">
        <Button color="purple" onClick={() => navigate("/profile/createBlog")}>
          Create post
        </Button>
        <Button color="purple" variant="outlined">
          Edit profile
        </Button>
      </CardFooter>
    </Card>
  );
};

export default ProfileCard;
