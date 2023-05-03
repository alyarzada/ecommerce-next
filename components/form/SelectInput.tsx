import { Select } from "antd";

interface Props {
  options: { value: string; label: string }[];
  name: string;
}

const SelectInput = ({
  options = [
    { value: "jack", label: "Jack" },
    { value: "lucy", label: "Lucy" },
    { value: "Yiminghe", label: "yiminghe" },
    { value: "disabled", label: "Disabled" },
  ],
  ...props
}: Props) => {
  const handleChange = (value: string) => {
    console.log(`selected ${value}`);
  };

  return (
    <div>
      <label htmlFor="model" className="text-sm font-semibold">
        Model
      </label>
      <Select
        id="model"
        defaultValue="lucy"
        className="w-full mb-2 block"
        onChange={handleChange}
        options={options}
        {...props}
      />
    </div>
  );
};

export default SelectInput;
