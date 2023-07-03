import BuyButton from "../components/BuyButton";
import GradientBackground from "../components/GradientBackground";
import { AiOutlineArrowDown } from "react-icons/ai";

const Hero = () => {
  return (
    <div className="w-full h-screen relative">
      <GradientBackground />
      <div className="w-full h-fit pt-12">
        <div className="w-full h-[416px] relative flex">
          <img
            src="sidePhoto.png"
            className="object-fit w-[411px] h-[416px] rounded-3xl absolute top-0 -translate-x-1/3"
          />
          <h2
            className="text-[24px] font-bold absolute top-0 right-3 text-[#FF0000]"
            style={{ writingMode: "vertical-lr" }}
          >
            EASTSIDE
          </h2>
        </div>
      </div>

      <h1
        className="w-full text-[70px] font-normal -translate-y-1/3"
        style={{ letterSpacing: "-0.39px" }}
      >
        ФУТБОЛКИ
      </h1>

      <div className="absolute right-3">
        <BuyButton />
      </div>

      <div className="absolute bottom-0 h-fit translate-y-1/2">
        <img src="bottomPhoto.png" />
      </div>

      <div className="absolute bottom-0 left-1/2 rounded-full bg-black/40 p-3 -translate-x-1/2">
        <AiOutlineArrowDown size={32} />
      </div>
    </div>
  );
};

export default Hero;
