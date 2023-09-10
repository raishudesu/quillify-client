import ProfileCard from "./components/ProfileCard";
import UserBlogs from "./components/UserBlogs";

const Profile = () => {
  return (
    <div className="py-6 mx-auto max-w-screen-2xl px-6 flex flex-col items-center justify-center gap-24 text-blue-gray-900">
      <ProfileCard />
      <UserBlogs />
    </div>
  );
};

export default Profile;
