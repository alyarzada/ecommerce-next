import Laptops from "./laptops/components/Laptops";
import Filterbar from "@/layout/Filterbar";
import Sortbar from "@/layout/Sortbar";
import { Toaster } from "react-hot-toast";
import type { InferGetStaticPropsType, GetStaticProps } from "next";
import laptops from "@/mocks/laptops";

interface Repo {
  name: string;
  stargazers_count: number;
}

export default function HomePage() {
  return (
    <main className="flex gap-x-3 px-[20px] lg:px-[40px] xl:px-[100px]">
      <Filterbar />

      <div className="flex-1">
        <Sortbar />
        <Laptops laptops={laptops} />
      </div>

      <Toaster position="top-center" />
    </main>
  );
}

export const getStaticProps: GetStaticProps<{
  laptops: Repo;
}> = async () => {
  const res = await fetch("http://localhost:3000/api/laptops");
  const data = await res.json();

  return { props: { laptops: data } };
};
