import { useEffect, useState } from "react";
import useStore from "@/app/store";
import SelectInput from "@/components/form/SelectInput";

const sortingOptions = [
  { value: "", label: "Select sorting" },
  { value: "az", label: "From a to z" },
  { value: "za", label: "From z to a" },
  { value: "expensiveCheap", label: "From expensive to cheap" },
  { value: "cheapExpensive", label: "From cheap to expensive" },
];

const Sortbar = () => {
  const [value, setValue] = useState("");
  const { setSortValue, laptopsCount } = useStore();

  useEffect(() => {
    setSortValue(value);
  }, [value]);

  return (
    <div className="rounded-lg w-full flex items-center justify-between border border-solid border-slate-300 p-3 mb-4">
      <h4 className="font-semibold text-purple-700">
        Result: <span className="text-black">{laptopsCount}</span>
      </h4>
      <div className="flex gap-x-3">
        <SelectInput
          options={sortingOptions}
          className="w-[160px]"
          hasLabel={false}
          name="priceSortingValue"
          setValue={setValue}
          value={value}
          defaultValue=""
        />
      </div>
    </div>
  );
};

export default Sortbar;
