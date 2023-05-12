import { Select } from "antd";

interface Props {
  options: { value: string; label: string }[];
  name?: string;
  className: string;
  hasLabel: boolean;
}

const SelectInput = ({
  options = [],
  className = "w-full mb-2 block",
  hasLabel = true,
  value,
  setValue,
  name,
  ...props
}: Props) => {
  return (
    <div>
      {hasLabel ? (
        <label htmlFor="model" className="text-sm font-semibold">
          Model
        </label>
      ) : null}
      <Select
        id="model"
        className={className}
        onChange={(value) => setValue(value)}
        options={options}
        {...props}
      />
    </div>
  );
};

export default SelectInput;
