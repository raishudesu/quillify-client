import { InputWithButton } from "./InputWithButton";
import { AiOutlineTwitter, AiFillLinkedin } from "react-icons/ai";

const Footer = () => {
  return (
    <div className="w-full max-h-content bg-blue-gray-900 text-blue-gray-100 px-6 py-10 flex flex-col justify-center items-center gap-6 overflow-hidden">
      <div className="w-full flex flex-col md:flex-row justify-center items-center gap-3">
        <div className="text-xl">Newsletter</div>
        <div>
          <InputWithButton />
        </div>
      </div>
      <div className="text-xl">DevInk for Devs</div>
      <div className="flex gap-2">
        <AiOutlineTwitter size={30} />
        <AiFillLinkedin size={30} />
      </div>
      <div>@DevInk 2023</div>
      <div>All rights reserved.</div>
    </div>
  );
};

export default Footer;
