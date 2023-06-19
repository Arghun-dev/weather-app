import { Input } from "antd";

import styles from "./SearchCity.module.scss";

interface SearchCityProps {
  searchTerm: string;
  setSearchTerm: (value: string) => void;
}

const SearchCity = ({
  searchTerm,
  setSearchTerm,
}: SearchCityProps): React.ReactElement => {
  return (
    <Input
      type="text"
      value={searchTerm}
      onChange={(e) => {
        setSearchTerm(e.target.value);
      }}
      placeholder="Search city..."
      className={styles.input}
      allowClear
    />
  );
};

export default SearchCity;
