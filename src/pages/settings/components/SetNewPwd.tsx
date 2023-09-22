import { Button, Card, Input, Typography } from "@material-tailwind/react";
import { FormEvent, useState } from "react";
import { useAuth } from "../../../stores/useAuth";

const SetNewPwd = () => {
  const [pwd, setPwd] = useState("");
  const [newPwd, setNewPwd] = useState("");
  const [confirmNewPwd, setConfirmNewPwd] = useState("");

  const { updateUserPwd, currentUser } = useAuth();

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    try {
      updateUserPwd(
        pwd,
        newPwd,
        confirmNewPwd,
        currentUser?.id as string,
        currentUser?.token as string
      );
      setPwd("");
      setNewPwd("");
      setConfirmNewPwd("");
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <>
      <Card className="w-full p-4">
        <Typography variant="h4">Set new password</Typography>
        <form className="mt-2 flex flex-col gap-2" onSubmit={handleSubmit}>
          <Input
            label="Current password"
            size="lg"
            value={pwd}
            onChange={(e) => setPwd(e.target.value)}
          />
          <Input
            label="New password"
            size="lg"
            value={newPwd}
            onChange={(e) => setNewPwd(e.target.value)}
          />
          <Input
            label="Confirm new password"
            size="lg"
            value={confirmNewPwd}
            onChange={(e) => setConfirmNewPwd(e.target.value)}
          />
          <Button color="purple" type="submit">
            Save
          </Button>
        </form>
      </Card>
    </>
  );
};

export default SetNewPwd;
