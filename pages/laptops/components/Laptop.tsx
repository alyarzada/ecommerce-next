import { Button } from "antd";
import { AiOutlineHeart } from "react-icons/ai";
import { FaBalanceScaleLeft } from "react-icons/fa";
import { poster } from "@/services";
import type { LaptopProps } from "@/types";
import { useRouter } from "next/router";
import toast from "react-hot-toast";
import useSWRMutation from "swr/mutation";

const Laptop = ({ laptop }: LaptopProps) => {
  const router = useRouter();
  const { price, manufacturer, category, id, image } = laptop;
  const { trigger } = useSWRMutation("http://localhost:3000/api/card", poster);

  const addToCardHandler = async (e) => {
    e.stopPropagation();
    try {
      await trigger(laptop);
      toast.success("Product added to card");
    } catch (err) {
      toast.error("Failed:(");
    }
  };

  return (
    <div
      onClick={(e) => {
        router.push(`/laptops/${id}`);
      }}
      className="cursor-pointer border border-solid border-slate-300 rounded-lg p-4"
    >
      <div className="flex justify-end gap-x-3 mb-3">
        <div>
          <FaBalanceScaleLeft className="text-[25px]" />
        </div>
        <div>
          <AiOutlineHeart className="text-[25px]" />
        </div>
      </div>

      <div className="mb-6">
        <img className="w-[60%] mx-auto" src={image} alt="" />
      </div>

      <div className="mb-4">
        <div className="flex items-center gap-x-2 mb-1">
          <h4 className="font-semibold">{manufacturer}</h4>
          <p className="text-sm"> / {category}</p>
        </div>
        <p className="font-semibold text-lg">${price}</p>
      </div>

      <Button
        onClick={addToCardHandler}
        className={`w-full ${
          5 < 0 ? "bg-purple-500" : "bg-green-500"
        } text-slate-50`}
      >
        {5 < 0 ? "Product is in Card" : "Add to Card"}
      </Button>
    </div>
  );
};

export default Laptop;
