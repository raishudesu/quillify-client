import {
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  Typography,
  Button,
} from "@material-tailwind/react";
import { useAuth } from "../../../stores/useAuth";

const ProfileCard = () => {
  const { currentUser } = useAuth();
  const { username, createdAt, email } = currentUser || {};
  return (
    <Card className="w-full flex flex-col items-center">
      <CardHeader className="rounded-full max-w-xs shadow-lg  overflow-hidden">
        <img
          src="https://scontent.fmnl4-6.fna.fbcdn.net/v/t39.30808-6/366198374_6357977777653843_560608511043661595_n.jpg?_nc_cat=108&ccb=1-7&_nc_sid=a2f6c7&_nc_eui2=AeE1fW8WeEy8_tH-9-2Ul6MBHncc7TvT7lgedxztO9PuWHbJrPeZ1znFvwsDu9opa-OtgKUdjG2_poh7H8jqfdwU&_nc_ohc=t5foDV7F7eEAX-iW7ME&_nc_ht=scontent.fmnl4-6.fna&oh=00_AfBZnc3LJbPt9qwps5ZGOdIuQXC6H4BevD0Q8POOLAVS8A&oe=6501EE86"
          alt=""
        />
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
        <Button color="purple">Edit profile</Button>
      </CardFooter>
    </Card>
  );
};

export default ProfileCard;
