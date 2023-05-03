import React from "react";
import laptops from "@/mocks/laptops";
import Laptop from "./Laptop";

const Laptops = () => {
  return (
    <div className="w-full rounded-lg border border-solid border-slate-300 p-3 grid grid-cols-4 gap-4">
      {laptops.map((laptop) => {
        return <Laptop key={laptop.id} {...laptop} />;
      })}
    </div>
  );
};

export default Laptops;
