import Searchbar from "@/components/interface/Searchbar";
import Link from "next/link";
import { AiOutlineShoppingCart, AiOutlineHeart } from "react-icons/ai";
import { FaBalanceScaleLeft } from "react-icons/fa";
import Logo from "@/assets/Logo";

const Navbar = () => {
  return (
    <header className="py-6 px-[100px] mb-6">
      <nav className="flex items-center gap-x-4">
        <div>
          <Logo />
        </div>

        {/* search bar */}
        <Searchbar />

        {/* navigation */}
        <div className="flex-1 flex justify-end">
          <ul className="flex gap-x-8">
            <li className="flex flex-col items-center">
              <FaBalanceScaleLeft className="text-[25px]" />
              <Link href="/" className="text-sm">
                Compare
              </Link>
            </li>
            <li className="flex flex-col items-center">
              <AiOutlineHeart className="text-[25px]" />
              <Link href="/" className="text-sm">
                Card
              </Link>
            </li>
            <li className="flex flex-col items-center">
              <AiOutlineShoppingCart className="text-[25px]" />
              <Link href="/" className="text-sm">
                Liked
              </Link>
            </li>
          </ul>
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
