import React from "react";
import { useRouter } from "next/router";
import laptops from "@/mocks/laptops";

import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Scrollbar } from "swiper";
import Link from "next/link";
import { FaBalanceScaleLeft } from "react-icons/fa";
import { AiOutlineHeart } from "react-icons/ai";
import { Button } from "antd";

const LaptopDetails = () => {
  const router = useRouter();
  const findElement = laptops.find((e) => e.id == +router.query.id);

  return (
    <div className="py-3 flex justify-center px-[100px]">
      <div className="w-1/2">
        <h1 className="text-[28px] font-semibold mb-2">
          {findElement?.manufacturer}
        </h1>
        <div className="flex gap-x-2">
          <div className="border border-solid border-purple-600 text-purple-800 font-semibold rounded px-3 py-1">
            Limited in stock
          </div>
          <div className="border border-solid border-green-600 text-green-800 font-semibold rounded px-3 py-1">
            Purchase by discount
          </div>
        </div>
        <div className="flex gap-x-10">
          <div>
            <img className="w-[280px] block" src={findElement.image} alt="" />
          </div>
          <div className="translate-y-5">
            <div className="bg-purple-500/10 text-sm mb-3 text-purple-800 font-semibold rounded px-3 py-1">
              Limited in stock
            </div>
            <div className="bg-green-500/10 text-sm mb-3 text-green-800 font-semibold rounded px-3 py-1">
              Purchase by discount
            </div>

            <div className="flex gap-x-3">
              <div>
                <Link href="/compare" className="text-sm">
                  <FaBalanceScaleLeft className="text-[25px]" />
                  <span>Compare</span>
                </Link>
              </div>
              <div>
                <Link href="/liked" className="text-sm">
                  <AiOutlineHeart className="text-[25px]" />
                  <span>Liked</span>
                </Link>
              </div>
            </div>
          </div>
        </div>
        <div className="flex justify-between pr-32">
          <h1 className="font-semibold text-lg">${findElement.price}</h1>
          <Button type="primary" danger>
            Complete order
          </Button>
        </div>
      </div>

      <div className="border-2 border-solid border-stone-300 rounded-lg py-3 px-6">
        <h1 className="text-[28px] font-semibold">Feautures</h1>
        <hr className="mb-3" />
        {Object.keys(laptops[0]).map((item, index) => {
          if (
            index == Object.keys(laptops[0]).length - 1 ||
            index == 0 ||
            index == 1
          )
            return;

          return (
            <div key={index}>
              <h1 className="flex gap-x-10 justify-between">
                <div>
                  <span className="font-semibold capitalize">{item}: </span>
                </div>
                <div>
                  <span className="w-[200px] block">{findElement[item]}</span>
                </div>
              </h1>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default LaptopDetails;
