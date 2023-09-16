import SideBar from "../../../components/SideBar";
import SubHeader from "../../../components/SubHeader";
import ProfileCard from "./ProfileCard";
import UserBlogs from "./UserBlogs";

const MainProfile = () => {
  return (
    <div className="flex flex-col lg:flex-row">
      <SubHeader />
      <div className="hidden lg:block">
        <SideBar />
      </div>
      <div className="flex flex-col gap-6 mt-6">
        <ProfileCard />
        <UserBlogs />
      </div>
    </div>
  );
};

export default MainProfile;
