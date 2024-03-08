import useStore from "@/app/store";
import { Input } from "antd";
const { Search } = Input;

const Searchbar = () => {
  const { getSearchKey } = useStore();

  const onSearch = (value: string) => {
    const key = value.trim().toLowerCase();
    getSearchKey(key);
  };

  return (
    <Search
      className="w-1/2 hidden md:block"
      size="large"
      placeholder="Search..."
      onSearch={onSearch}
      enterButton
    />
  );
};

export default Searchbar;
