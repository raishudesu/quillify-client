import { useState, FormEvent } from "react";
import { Card, Input, Button, Typography } from "@material-tailwind/react";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../../../stores/useAuth";
import { useMutation } from "@tanstack/react-query";

const SignUpForm = () => {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);

  const navigate = useNavigate();
  const { userRegister, registerSuccess } = useAuth();

  const mutation = useMutation(userRegister, {
    onMutate: () => {
      setLoading(true);
    },
    onSuccess: () => {
      if (registerSuccess) {
        navigate("/auth");
      }

      setLoading(false);
    },
    onError: (error) => {
      console.error(error);
    },
  });

  const handleRegister = (e: FormEvent) => {
    e.preventDefault();
    try {
      mutation.mutate({ username, email, password });
    } catch (error) {
      console.log(error);
    } finally {
      setUsername("");
      setEmail("");
      setPassword("");
    }
  };
  return (
    <Card color="transparent" shadow={true} className="p-12">
      <Typography variant="h4" color="blue-gray">
        Sign Up
      </Typography>
      <Typography color="gray" className="mt-1 font-normal">
        Enter your details to register.
      </Typography>
      <form
        className="mt-8 mb-2 w-full max-w-screen-lg sm:w-96 overflow-auto"
        onSubmit={handleRegister}
      >
        <div className="mb-4 flex flex-col gap-6 py-1">
          <Input
            size="lg"
            label="Username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            required
            disabled={loading}
            crossOrigin="anonymous"
          />
          <Input
            size="lg"
            label="Email"
            value={email}
            type="email"
            onChange={(e) => setEmail(e.target.value)}
            required
            disabled={loading}
            crossOrigin="anonymous"
          />
          <Input
            type="password"
            size="lg"
            label="Password"
            value={password}
            required
            onChange={(e) => setPassword(e.target.value)}
            disabled={loading}
            crossOrigin="anonymous"
          />
        </div>
        <Button
          className="mt-6"
          fullWidth
          color="purple"
          type="submit"
          disabled={loading}
        >
          Register
        </Button>
        <Typography color="gray" className="mt-4 text-center font-normal">
          Already have an account?{" "}
          <a
            onClick={() => navigate("/auth")}
            className="font-medium text-gray-900 cursor-pointer hover:underline hover:text-purple-500"
          >
            Sign In
          </a>
        </Typography>
      </form>
    </Card>
  );
};

export default SignUpForm;
