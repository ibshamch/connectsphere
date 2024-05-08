import { useState } from "react";
import FormInput from "./FormInput";
import { CiSearch } from "react-icons/ci";

const SearchBar = ({ className }) => {
  const [input, setInput] = useState("");
  return (
    <form
      className={`border border-black flex items-center gap-2 ${className}`}
    >
      <CiSearch className="text-2xl flex items-center mb-1" />
      <FormInput
        value={input}
        onChange={(e) => setInput(e.target.value)}
        placeholder="Search"
        className="px-12 pr-72 border-none "
      />
    </form>
  );
};

export default SearchBar;
