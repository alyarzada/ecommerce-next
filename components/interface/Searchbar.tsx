import { Input } from "antd";
import { AudioOutlined } from "@ant-design/icons";

const { Search } = Input;

const Searchbar = () => {
  const onSearch = (value: string) => console.log(value);

  return (
    <Search
      className="w-1/2"
      size="large"
      placeholder="input search text"
      onSearch={onSearch}
      enterButton
    />
  );
};

export default Searchbar;
