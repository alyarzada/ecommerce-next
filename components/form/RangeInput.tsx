import { useEffect, useState } from "react";
import { useField } from "formik";
import { Input } from "antd";

interface Props {
  label: string;
}

const RangeInput = ({ label, ...props }: Props) => {
  const [field, meta, helpers] = useField(props);

  const [value, setValue] = useState({
    min: 0,
    max: 100000,
  });

  const changeHandler = (e) => {
    setValue({
      ...value,
      [e.target.name]:
        (e.target.name === "min" && !e.target.value) ||
        (e.target.name === "min" && +e.target.value > value.max)
          ? 0
          : (e.target.name === "max" && !e.target.value) ||
            (e.target.name === "max" && +e.target.value < value.min)
          ? 100000
          : +e.target.value,
    });
  };

  useEffect(() => {
    helpers.setValue(value);
  }, [value]);

  return (
    <div>
      <label className="font-semibold" htmlFor={label}>
        {label}
      </label>
      <div id={label} className="flex gap-x-4 my-3" {...props}>
        <Input value={value.minValue} name="min" onChange={changeHandler} />
        <Input value={value.maxValue} name="max" onChange={changeHandler} />
      </div>
    </div>
  );
};

export default RangeInput;
