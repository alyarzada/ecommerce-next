import Searchbar from "@/components/interface/Searchbar";
import Link from "next/link";
import { AiOutlineShoppingCart, AiOutlineHeart } from "react-icons/ai";
import { FaBalanceScaleLeft } from "react-icons/fa";
import Logo from "@/assets/Logo";
import useSWR from "swr";
import { fetcher } from "@/services";

const Navbar = () => {
  const { data, error } = useSWR("http://localhost:3000/api/card", fetcher);

  console.log(data);
  return (
    <header className="py-6 px-[20px] lg:px-[40px] xl:px-[100px] mb-6">
      <nav className="flex justify-between md:justify-normal items-center gap-x-4">
        <Logo />

        <Searchbar />

        {/* navigation */}
        <div className="flex-1 flex justify-end">
          <ul className="flex gap-x-8">
            <li className="flex flex-col items-center">
              <Link href="/compare" className="text-sm">
                <FaBalanceScaleLeft className="text-[25px]" />
                <span>Compare</span>
              </Link>
            </li>
            <li className="flex flex-col items-center">
              <Link href="/liked" className="text-sm">
                <AiOutlineHeart className="text-[25px]" />
                <span>Liked</span>
              </Link>
            </li>
            <li className="flex flex-col items-center relative">
              <Link href="/card" className="text-sm">
                <AiOutlineShoppingCart className="text-[25px]" />
                Card
                {/* {data.length > 0 ? (
                  <span className="absolute -top-1 -left-1 block w-[17px] h-[17px] bg-purple-500 rounded-full text-center leading-[17px] text-slate-50 text-sm">
                    {data.length}
                  </span>
                ) : null} */}
              </Link>
            </li>
          </ul>
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
