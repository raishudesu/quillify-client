import { Button, Card, Typography } from "@material-tailwind/react";
import SetNewPwd from "./SetNewPwd";

const SettingsAccount = () => {
  return (
    <div className="w-full max-w-screen-sm">
      <SetNewPwd />
      <Card className="mt-4 w-full p-4 flex flex-col gap-2">
        <Typography variant="h4" color="red">
          Delete account
        </Typography>
        <Typography variant="paragraph">
          <span className="font-bold">Deleting your account will: </span>
          Delete your profile, along with your authentication associations. This
          does not include applications permissions. You will have to remove
          them yourself: Delete any and all content you have, such as articles,
          comments, or your reading list. Allow your username to become
          available to anyone.
        </Typography>

        <Button color="red">Delete account</Button>
      </Card>
    </div>
  );
};

export default SettingsAccount;
