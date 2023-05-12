import { Checkbox } from "antd";
import type { CheckboxValueType } from "antd/es/checkbox/Group";
import { useField } from "formik";

interface Props {
  label: string;
  options: { label: string; value: string }[];
}

const CheckBox = ({ label, options, ...props }: Props) => {
  const [field, meta, helpers] = useField(props);

  const onChange = (checkedValues: CheckboxValueType[]) => {
    helpers.setValue(checkedValues);
  };

  return (
    <div>
      <label>
        <span className="mb-2 block font-semibold">{label}</span>
        <Checkbox.Group
          className="flex-col flex"
          options={options}
          onChange={onChange}
          // defaultValue={["Apple"]}
          {...props}
        />
      </label>
    </div>
  );
};

export default CheckBox;
