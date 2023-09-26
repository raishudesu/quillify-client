import { useState, FormEvent } from "react";
import { Card, Input, Button, Typography } from "@material-tailwind/react";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../../../stores/useAuth";
import { loginFailedToast, loginSuccessToast } from "../../../lib/toasts";
import { useMutation } from "@tanstack/react-query";
const SignInForm = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);

  const navigate = useNavigate();
  const { userLogin, loginSuccess } = useAuth();

  const mutation = useMutation(userLogin, {
    onMutate: () => {
      setLoading(true);
    },
    onSuccess: () => {
      // Handle success, e.g., show a success toast and navigate
      if (loginSuccess) {
        loginSuccessToast();
        navigate("/profile");
      } else {
        loginFailedToast();
      }
      setLoading(false);
    },
    onError: (error) => {
      // Handle error, e.g., show an error toast
      console.error(error);
      loginFailedToast();
    },
  });

  const handleLogin = (e: FormEvent) => {
    e.preventDefault();
    try {
      mutation.mutate({ email, password });
    } catch (error) {
      console.log(error);
    } finally {
      setEmail("");
      setPassword("");
    }
  };
  return (
    <Card color="transparent" shadow={true} className="p-12">
      <Typography variant="h4" color="blue-gray">
        Sign In
      </Typography>
      <Typography color="gray" className="mt-1 font-normal">
        Enter your details to sign in.
      </Typography>
      <form
        className="mt-8 mb-2 w-full max-w-screen-lg sm:w-96 overflow-auto"
        onSubmit={handleLogin}
      >
        <div className="mb-4 flex flex-col gap-6 py-1">
          <Input
            size="lg"
            label="Email"
            value={email}
            type="email"
            required
            onChange={(e) => setEmail(e.target.value)}
          />
          <Input
            type="password"
            size="lg"
            label="Password"
            value={password}
            required
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>
        <Button
          className="mt-6"
          fullWidth
          color="purple"
          type="submit"
          disabled={loading}
        >
          Sign in
        </Button>
        <Typography color="gray" className="mt-4 text-center font-normal">
          Doesn't have an account?{" "}
          <a
            onClick={() => navigate("/auth/signup")}
            className="font-medium text-gray-900 cursor-pointer hover:underline hover:text-purple-500"
          >
            Register
          </a>
        </Typography>
      </form>
    </Card>
  );
};

export default SignInForm;
