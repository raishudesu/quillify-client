import {
  Card,
  Typography,
  List,
  ListItem,
  ListItemPrefix,
} from "@material-tailwind/react";
import { UserCircleIcon, Cog6ToothIcon } from "@heroicons/react/24/solid";
import { useNavigate } from "react-router-dom";

const SettingsSideBar = () => {
  const navigate = useNavigate();

  return (
    <Card className="h-[calc(100vh-2rem)] w-full max-w-[20rem] p-4 shadow-none">
      <div className="mb-2 p-4">
        <Typography variant="h5" color="purple">
          Settings
        </Typography>
      </div>
      <List>
        <ListItem onClick={() => navigate("/profile/settings")}>
          <ListItemPrefix>
            <UserCircleIcon className="h-5 w-5" />
          </ListItemPrefix>
          Profile
        </ListItem>
        <ListItem onClick={() => navigate("/profile/settings/account")}>
          <ListItemPrefix>
            <Cog6ToothIcon className="h-5 w-5" />
          </ListItemPrefix>
          Account
        </ListItem>
      </List>
    </Card>
  );
};

export default SettingsSideBar;
