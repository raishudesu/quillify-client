import { Button, Card, Input, Typography } from "@material-tailwind/react";
import { useAuth } from "../../../stores/useAuth";
import { TCurrentUser } from "../../../lib/types";
import { useEffect, useState } from "react";

const SettingsProfile = () => {
  const { currentUser, updateUserProfile } = useAuth();

  const { username, email } = currentUser as TCurrentUser;

  const [newUsername, setNewUsername] = useState(username);
  const [newEmail, setNewEmail] = useState(email);
  const [password, setPassword] = useState("");
  const [disabled, setDisabled] = useState(true);

  useEffect(() => {
    password === "" || newUsername === "" || newEmail === ""
      ? setDisabled(true)
      : setDisabled(false);
  }, [newUsername, newEmail, password]);

  const handleProfileUpdate = () => {
    try {
      updateUserProfile(
        newUsername,
        newEmail,
        currentUser?.id as string,
        password,
        currentUser?.token as string
      );
    } catch (error) {
      console.log(error);
    } finally {
      setPassword("");
    }
  };

  return (
    <div className="w-full max-w-screen-sm">
      <Card className="w-full p-4 flex flex-col gap-4">
        <Typography variant="h4">User</Typography>
        <Input
          label="Name"
          size="lg"
          value={newUsername}
          onChange={(e) => setNewUsername(e.target.value)}
          crossOrigin="anonymous"
        />
        <Input
          label="Email"
          size="lg"
          value={newEmail}
          onChange={(e) => setNewEmail(e.target.value)}
          crossOrigin="anonymous"
        />
        <Typography variant="h6">Enter password to save</Typography>
        <Input
          label="Password"
          size="lg"
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          crossOrigin="anonymous"
        />
        <Button
          color="purple"
          disabled={disabled}
          onClick={handleProfileUpdate}
        >
          Save profile
        </Button>
      </Card>
    </div>
  );
};

export default SettingsProfile;
