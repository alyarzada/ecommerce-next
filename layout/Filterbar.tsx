import { Formik, Form } from "formik";
import { Button } from "antd";
import { LaptopInitialValues } from "@/mocks/laptops";
import CheckBox from "../components/form/CheckBox";
import RangeInput from "@/components/form/RangeInput";
import { filterCheckboxes } from "@/mocks/filterCheckboxes";
import useStore from "@/app/store";
import { CiFilter } from "react-icons/ci";

const initialValues: LaptopInitialValues = {
  price: { min: 0, max: 100000 },
  manufacturer: [],
  category: [],
  displaySize: [],
  touchScreen: [],
  ssd: [],
  hdd: [],
  numberOfCores: [],
  ram: [],
  cpu: [],
  os: [],
  videoCard: [],
  videoCardMemory: [],
};

const Filterbar = () => {
  const { setFilters } = useStore();

  const submitHandler = (values) => setFilters(values);

  return (
    <div className="w-[300px] p-5 rounded-lg border border-solid border-slate-300">
      <div className="flex justify-between items-center">
        <h4 className="font-semibold">Filter</h4>
        <CiFilter />
      </div>

      <hr className="my-4" />

      <Formik initialValues={initialValues} onSubmit={submitHandler}>
        {() => (
          <Form>
            <RangeInput name="price" label="Price range" />
            {filterCheckboxes.map((checkbox) => (
              <div className="mb-4" key={checkbox.id}>
                <CheckBox
                  name={checkbox.name}
                  label={checkbox.label}
                  options={checkbox.options}
                />
                <hr className="mt-2" />
              </div>
            ))}
            <Button
              htmlType="submit"
              size="large"
              className="w-full bg-purple-800 text-slate-50"
            >
              Search
            </Button>
          </Form>
        )}
      </Formik>
    </div>
  );
};

export default Filterbar;

// fixed left-[110px] bottom-24 w-[280px]
