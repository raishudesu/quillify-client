import {
  Card,
  Typography,
  List,
  ListItem,
  ListItemPrefix,
  Button,
} from "@material-tailwind/react";
import {
  NewspaperIcon,
  UserCircleIcon,
  Cog6ToothIcon,
  PowerIcon,
  HomeIcon,
} from "@heroicons/react/24/solid";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../stores/useAuth";

const SideBar = () => {
  const navigate = useNavigate();
  const { currentUser, userLogout } = useAuth();
  return (
    <Card className="h-full w-full max-w-[20rem] p-4 shadow-none">
      <div className="mb-2 p-4">
        <Typography variant="h5" color="purple">
          Quillify
        </Typography>
      </div>
      <List>
        <ListItem onClick={() => navigate("/blogs")}>
          <ListItemPrefix>
            <NewspaperIcon className="h-5 w-5" />
          </ListItemPrefix>
          Blogs
        </ListItem>
        <ListItem onClick={() => navigate("/")}>
          <ListItemPrefix>
            <HomeIcon className="h-5 w-5" />
          </ListItemPrefix>
          DevInk
        </ListItem>
        {currentUser ? (
          <>
            <ListItem onClick={() => navigate("/profile")}>
              <ListItemPrefix>
                <UserCircleIcon className="h-5 w-5" />
              </ListItemPrefix>
              Profile
            </ListItem>
            <ListItem onClick={() => navigate("/profile/settings")}>
              <ListItemPrefix>
                <Cog6ToothIcon className="h-5 w-5" />
              </ListItemPrefix>
              Settings
            </ListItem>
            <ListItem onClick={userLogout}>
              <ListItemPrefix>
                <PowerIcon className="h-5 w-5" />
              </ListItemPrefix>
              Sign out
            </ListItem>
          </>
        ) : (
          <div className="flex flex-col gap-2">
            <Button color="purple" onClick={() => navigate("/auth/signup")}>
              Sign up
            </Button>
            <Button
              color="purple"
              variant="text"
              onClick={() => navigate("/auth")}
            >
              Sign in
            </Button>
          </div>
        )}
      </List>
    </Card>
  );
};

export default SideBar;
