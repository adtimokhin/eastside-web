import { AiOutlineArrowRight } from "react-icons/ai";

const BuyButton = () => {
  return (
    <a
      className="flex bg-transparent border-[5px] border-[#FF5252] rounded-[30px] justify-evenly items-center px-5 py-2"
      href="https://ozon.ru/seller/eastsidetee-84045/products/"
      target="_blank"
    >
      <p className="font-semibold text-[24px]">Купить</p>
      <AiOutlineArrowRight size={26}/>
    </a>
  );
};

export default BuyButton;
