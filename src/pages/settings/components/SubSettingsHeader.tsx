import { useState } from "react";
import { Drawer } from "@material-tailwind/react";
import { Bars3Icon } from "@heroicons/react/24/solid";
import SettingsSideBar from "./SettingsSideBar";

const SideDrawer = () => {
  const [open, setOpen] = useState(false);

  const openDrawer = () => setOpen(true);
  const closeDrawer = () => setOpen(false);

  return (
    <>
      <Bars3Icon
        className="h-6 w-6 cursor-pointer"
        strokeWidth={2}
        onClick={openDrawer}
      />
      <Drawer open={open} onClose={closeDrawer} className="p-4">
        <SettingsSideBar onClose={closeDrawer} />
      </Drawer>
    </>
  );
};

export default SideDrawer;
