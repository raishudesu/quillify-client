import React from "react";
import { Drawer } from "@material-tailwind/react";
import { Bars3Icon } from "@heroicons/react/24/solid";
import SideBar from "./SideBar";

const SideDrawer = () => {
  const [open, setOpen] = React.useState(false);

  const openDrawer = () => setOpen(true);
  const closeDrawer = () => setOpen(false);

  return (
    <React.Fragment>
      <Bars3Icon className="h-6 w-6" strokeWidth={2} onClick={openDrawer} />
      <Drawer open={open} onClose={closeDrawer} className="p-4">
        <SideBar />
      </Drawer>
    </React.Fragment>
  );
};

export default SideDrawer;
