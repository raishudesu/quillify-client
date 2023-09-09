import { useState, useEffect, SetStateAction, Dispatch } from "react";
import {
  Navbar,
  Collapse,
  Typography,
  IconButton,
  Button,
} from "@material-tailwind/react";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";
import { useNavigate } from "react-router-dom";
import { Link as ScrollLink } from "react-scroll";
import { GiScrollQuill } from "react-icons/gi";
import { useAuth } from "../stores/useAuth";
import UserMenu from "./UserMenu";

function NavList({
  setOpenNav,
}: {
  setOpenNav: Dispatch<SetStateAction<boolean>>;
}) {
  const navigate = useNavigate();
  return (
    <ul className="my-2 flex flex-col gap-2 lg:mb-0 lg:mt-0 lg:flex-row lg:items-center lg:gap-6">
      <Typography
        as="li"
        variant="small"
        color="blue-gray"
        className="p-1 font-medium"
      >
        <a
          onClick={() => {
            navigate("/");
            setOpenNav(false);
          }}
          className="flex items-center hover:text-[#AB47BC] transition-colors cursor-pointer"
        >
          Home
        </a>
      </Typography>
      <Typography
        as="li"
        variant="small"
        color="blue-gray"
        className="p-1 font-medium"
      >
        <ScrollLink
          to="community"
          spy={true}
          smooth={true}
          offset={-250}
          duration={500}
          className="flex items-center hover:text-[#AB47BC] transition-colors cursor-pointer"
          onClick={() => setOpenNav(false)}
        >
          Community
        </ScrollLink>
      </Typography>
      <Typography
        as="li"
        variant="small"
        color="blue-gray"
        className="p-1 font-medium"
      >
        <a
          onClick={() => {
            navigate("/blogs");
            setOpenNav(false);
          }}
          className="flex items-center hover:text-[#AB47BC] transition-colors cursor-pointer"
        >
          Blogs
        </a>
      </Typography>
    </ul>
  );
}

const Header = () => {
  const { currentUser } = useAuth();

  const navigate = useNavigate();
  const [openNav, setOpenNav] = useState(false);

  const handleWindowResize = () =>
    window.innerWidth >= 960 && setOpenNav(false);

  useEffect(() => {
    window.addEventListener("resize", handleWindowResize);

    return () => {
      window.removeEventListener("resize", handleWindowResize);
    };
  }, []);
  return (
    <Navbar className="mx-auto max-w-screen-2xl px-6 py-3 shadow-none">
      <div className="flex items-center justify-between text-blue-gray-900">
        <Typography
          as="a"
          href="#"
          variant="h6"
          className="mr-4 cursor-pointer py-1.5 flex items-center"
        >
          <GiScrollQuill size={20} />
          <div>
            <span className="text-[#AB47BC] font-bold ml-1">DevInk </span>
            for Devs
          </div>
        </Typography>
        <div className="hidden lg:block">
          <NavList setOpenNav={setOpenNav} />
        </div>
        <div className="hidden gap-2 lg:flex">
          {!currentUser ? (
            <>
              <Button
                onClick={() => navigate("/auth")}
                variant="text"
                size="sm"
                color="blue-gray"
              >
                Sign In
              </Button>
              <Button
                onClick={() => navigate("/auth/signup")}
                variant="gradient"
                color="purple"
                size="sm"
              >
                Sign Up
              </Button>
            </>
          ) : (
            <UserMenu />
          )}
        </div>
        <IconButton
          variant="text"
          className="ml-auto h-6 w-6 text-inherit hover:bg-transparent focus:bg-transparent active:bg-transparent lg:hidden"
          ripple={false}
          onClick={() => setOpenNav(!openNav)}
        >
          {openNav ? (
            <XMarkIcon className="h-6 w-6" strokeWidth={2} />
          ) : (
            <Bars3Icon className="h-6 w-6" strokeWidth={2} />
          )}
        </IconButton>
      </div>
      <Collapse open={openNav}>
        <NavList setOpenNav={setOpenNav} />
        <div className="flex w-full flex-nowrap items-center gap-2 lg:hidden">
          {!currentUser ? (
            <>
              <Button
                onClick={() => {
                  navigate("/auth");
                  setOpenNav(!openNav);
                }}
                variant="outlined"
                size="sm"
                color="blue-gray"
                fullWidth
              >
                Sign In
              </Button>
              <Button
                onClick={() => {
                  navigate("/auth/signup");
                  setOpenNav(!openNav);
                }}
                variant="gradient"
                color="purple"
                size="sm"
                fullWidth
              >
                Sign Up
              </Button>
            </>
          ) : (
            <UserMenu />
          )}
        </div>
      </Collapse>
    </Navbar>
  );
};

export default Header;
