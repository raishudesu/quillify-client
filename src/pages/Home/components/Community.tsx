import { AiFillLinkedin, AiOutlineTwitter } from "react-icons/ai";
import { BsDiscord } from "react-icons/bs";
import CommunityImg from "../../../assets/community.svg";

const Community = () => {
  return (
    <div
      id="community"
      className="w-full flex justify-center items-center text-blue-gray-900  overflow-hidden"
    >
      <div className="flex flex-col-reverse md:flex-row justify-center items-center gap-16">
        <div className="">
          <img src={CommunityImg} alt="communityimg" />
        </div>
        <div className="flex flex-col gap-6">
          <span className="text-3xl lg:text-4xl font-bold">
            Join the growing community.
          </span>
          <span className="text-md">
            Connect with fellow developers, share your insights, and grow your
            skills in a collaborative space. At{" "}
            <span className="text-purple-500 font-bold">Quillify</span>, we're
            more than just a community; we're a supportive network of tech
            enthusiasts on a mission to learn and innovate together. Join us
            today and be part of something bigger.
          </span>
          <div className="flex gap-4">
            <AiOutlineTwitter size={30} />
            <AiFillLinkedin size={30} />
            <BsDiscord size={30} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Community;
