import { Button } from "antd";

interface Props {
  id: number;
  price: string;
  manufacturer: string;
  category: string;
  image: string;
}

const Laptop = ({ price, manufacturer, category, id, image }: Props) => {
  const clickHandler = () => {};
  return (
    <div
      onClick={clickHandler}
      className="cursor-pointer border border-solid border-slate-300 rounded-lg p-3"
    >
      <div className="mb-6">
        <img src={image} alt="" />
        <h4 className="text-center">{manufacturer}</h4>
        <p className="text-center text-sm">{category}</p>
      </div>
      <div className="flex justify-between gap-x-6 items-center">
        <p>{price}</p>
        <Button>Add to Card</Button>
      </div>
    </div>
  );
};

export default Laptop;

//   displaySize,
//   touchScreen,
//   ssd,
//   hdd,
//   numberOfCores,
//   ram,
//   cpu,
//   os,
//   videoCard,
//   videoCardMemory,
