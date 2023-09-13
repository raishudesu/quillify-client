import { Spinner } from "@material-tailwind/react";
import { Suspense, useEffect } from "react";
import { Outlet, useNavigate } from "react-router-dom";
import { useAuth } from "../../stores/useAuth";

const SignIn = () => {
  const navigate = useNavigate();
  const { currentUser } = useAuth();

  useEffect(() => {
    currentUser ? navigate("/blogs") : null;
  }, [currentUser, navigate]);

  return (
    <div className="mx-auto max-w-screen-2xl h-screen py-6 px-6 flex flex-col items-center justify-center gap-6 overflow-hidden">
      <div className="text-6xl font-semibold text-[#AB47BC]">DevInk</div>
      <Suspense fallback={<Spinner />}>
        <Outlet />
      </Suspense>
    </div>
  );
};

export default SignIn;
