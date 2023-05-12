import laptops from "@/mocks/laptops";
import Laptop from "./Laptop";
import useStore from "@/app/store";
import { useEffect } from "react";

const Laptops = () => {
  const { filters, sortValue, searchKey, getLaptopsCount } = useStore();

  useEffect(() => {
    getLaptopsCount(filteredLaptops.length);
  }, [filters, sortValue]);

  let filteredLaptops;

  // filtering
  const filterLaptops = (laptops, filters) => {
    if (typeof window !== "undefined") {
      window.scrollTo(0, 0);
    }

    return laptops.filter((laptop) => {
      return Object.keys(filters).every((filterType) => {
        if (filterType === "price") {
          return (
            filters.price.min <=
            Number(laptop.price.slice(1)) <=
            filters.price.max
          );
        }
        if (!filters[filterType].length) return true;
        return filters[filterType].includes(laptop[filterType]);
      });
    });
  };

  // sorting
  if (!sortValue) {
    filteredLaptops = filterLaptops(laptops, filters);
  } else if (sortValue === "az") {
    filteredLaptops = filterLaptops(laptops, filters).sort((a, b) =>
      a.manufacturer.localeCompare(b.manufacturer)
    );
  } else if (sortValue === "za") {
    filteredLaptops = filterLaptops(laptops, filters).sort((a, b) =>
      b.manufacturer.localeCompare(a.manufacturer)
    );
  } else if (sortValue === "cheapExpensive") {
    filteredLaptops = filterLaptops(laptops, filters).sort(
      (a, b) => +a.price - +b.price
    );
  } else if (sortValue === "expensiveCheap") {
    filteredLaptops = filterLaptops(laptops, filters).sort(
      (a, b) => +b.price - +a.price
    );
  }

  // searching by searchKey
  filteredLaptops = filteredLaptops.filter((laptop) => {
    if (!searchKey) return true;
    return laptop.manufacturer.toLowerCase().includes(searchKey);
  });

  if (!filteredLaptops.length)
    return <h1 className="font-semibold">No item found</h1>;

  return (
    <div className="w-full grid grid-cols-3 gap-4">
      {filteredLaptops.map((laptop) => {
        return <Laptop key={laptop.id} laptop={laptop} />;
      })}
    </div>
  );
};

export default Laptops;
