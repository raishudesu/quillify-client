import { Outlet } from "react-router-dom";
import SettingsSideBar from "./components/SettingsSideBar";
import SubHeader from "../../components/SubHeader";
import SubSettingsHeader from "./components/SubSettingsHeader";

const Settings = () => {
  return (
    <div className="py-6 mx-auto w-full max-w-screen-2xl px-6 flex flex-col items-center justify-center gap-6 text-blue-gray-900">
      <SubHeader />

      <div className="flex flex-col lg:flex-row w-full justify-center ">
        <div className="hidden lg:block">
          <SettingsSideBar onClose={() => null} />
        </div>
        <div className="lg:hidden mb-6">
          <SubSettingsHeader />
        </div>
        <Outlet />
      </div>
    </div>
  );
};

export default Settings;
