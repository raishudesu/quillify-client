import { Button } from "@material-tailwind/react";
import HeroImg from "../../../assets/hero.svg";
import { useNavigate } from "react-router-dom";

const Hero = () => {
  const navigate = useNavigate();
  return (
    <div className="w-full flex justify-center items-center text-blue-gray-900  overflow-hidden">
      <div className="flex flex-col md:flex-row justify-center items-center gap-16">
        <div className="flex flex-col gap-6">
          <span className="text-5xl lg:text-7xl font-bold">
            Explore the World of Coding and Technology
          </span>
          <span className="text-xl">
            Your source for tech insights, tutorials, and community discussions.
            Join <span className="text-purple-500 font-bold">DevInk</span> today
            to stay ahead in coding and tech.
          </span>
          <div className="flex gap-4">
            <Button color="purple" onClick={() => navigate("/blogs")}>
              Blogs
            </Button>
            <Button variant="outlined" onClick={() => navigate("auth/signup")}>
              Register
            </Button>
          </div>
        </div>
        <div className="">
          <img src={HeroImg} alt="heroimg" />
        </div>
      </div>
    </div>
  );
};

export default Hero;
