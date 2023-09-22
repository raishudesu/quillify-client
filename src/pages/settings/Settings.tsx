import { Outlet } from "react-router-dom";
import SettingsSideBar from "./components/SettingsSideBar";
import SubHeader from "../../components/SubHeader";

const Settings = () => {
  return (
    <div className="py-6 mx-auto w-full max-w-screen-2xl px-6 flex flex-col items-center justify-center gap-6 text-blue-gray-900">
      <SubHeader />
      <div className="flex w-full justify-center ">
        <SettingsSideBar />
        <Outlet />
      </div>
    </div>
  );
};

export default Settings;
