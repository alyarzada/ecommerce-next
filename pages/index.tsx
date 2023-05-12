import Laptops from "@/components/pages/home/Laptops";
import Filterbar from "@/layout/Filterbar";
import Sortbar from "@/layout/Sortbar";
import { Toaster } from "react-hot-toast";

export default function HomePage() {
  return (
    <main className="flex gap-x-3 px-[100px]">
      <Filterbar />
      <div className="flex-1">
        <Sortbar />
        <Laptops />
      </div>
      <Toaster position="top-center" />
    </main>
  );
}
