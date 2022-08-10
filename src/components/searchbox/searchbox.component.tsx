import React, { ChangeEvent } from "react";
import "./searchbox.styles.css";

type SearchBoxProps = {
  placeholder?: string;
  handleChange: (event: ChangeEvent<HTMLInputElement>) => void;
};

const SearchBox = ({ placeholder, handleChange }: SearchBoxProps) => {
  return (
    <input
      className="search"
      type="search"
      placeholder={placeholder}
      onChange={handleChange}
    />
  );
};

export default SearchBox;
