import { Formik, Form } from "formik";
import { Button } from "antd";
import SelectInput from "@/components/form/SelectInput";
import CheckBox from "../components/form/CheckBox";
import RangeInput from "@/components/form/RangeInput";
import { LaptopType } from "@/mocks/laptops";

const initialValues: LaptopType = {
  price: "",
  manufacturers: "",
  category: "",
  displaySize: "",
  touchScreen: "",
  ssd: "",
  hdd: "",
  numberOfCores: "",
  ram: "",
  cpu: "",
  os: "",
  videoCard: "",
  videoCardMemory: "",
};

const Filterbar = () => {
  const submitHandler = () => {};
  return (
    <div className="w-[300px] p-3 rounded-lg border border-solid border-slate-300">
      <Formik initialValues={initialValues} onSubmit={submitHandler}>
        {() => (
          <Form>
            <RangeInput name="price" />
            <SelectInput name="manufacturers" options={[]} />
            <SelectInput name="category" options={[]} />
            <SelectInput name="displaySize" options={[]} />
            <CheckBox name="touchScreen" />
            <SelectInput name="ssd" options={[]} />
            <SelectInput name="hdd" options={[]} />
            <SelectInput name="numberOfCores" options={[]} />
            <SelectInput name="ram" options={[]} />
            <SelectInput name="cpu" options={[]} />
            <SelectInput name="os" options={[]} />
            <SelectInput name="videoCard" options={[]} />
            <SelectInput name="videoCardMemory" options={[]} />
            <div className="col-span-6 flex justify-end">
              <Button>Search</Button>
            </div>
          </Form>
        )}
      </Formik>
    </div>
  );
};

export default Filterbar;
