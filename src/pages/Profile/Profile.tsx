import { Spinner } from "@material-tailwind/react";
import { Suspense } from "react";
import { Outlet } from "react-router-dom";

const Profile = () => {
  return (
    <div className="py-6 mx-auto max-w-screen-2xl px-6 flex flex-col items-center justify-center gap-24 text-blue-gray-900">
      <Suspense fallback={<Spinner />}>
        <Outlet />
      </Suspense>
    </div>
  );
};

export default Profile;
