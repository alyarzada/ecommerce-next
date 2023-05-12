import useStore from "@/app/store";
import CardItem from "./components/cardItem";
import { Button } from "antd";

const Card = () => {
  const { card } = useStore();

  return (
    <div className="px-[100px]">
      <h1 className="text-[30px] mb-4 font-semibold">Card</h1>
      <div className="flex justify-between gap-x-16">
        <div className="w-[70%]">
          {card.map((item) => (
            <CardItem item={item} key={item.id} />
          ))}
        </div>

        <div className="border-2 border-solid border-purple-500 rounded-lg py-4 px-6 h-fit flex-1">
          <h4 className="font-semibold text-[24px] mb-4">Card products</h4>
          <div className="flex justify-between mb-4">
            <span className="text-purple-700 font-semibold">Total price:</span>
            <span className="font-semibold text-lg">
              $
              {Math.round(
                card.reduce((acc, item) => acc + item.count * item.price, 0)
              )}
            </span>
          </div>
          <Button
            size="large"
            className="w-full bg-purple-600 text-slate-50 font-semibold"
          >
            Sifariwi resmilewdir
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Card;
