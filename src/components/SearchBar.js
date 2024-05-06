import { useState } from "react";
import FormInput from "./FormInput";

const SearchBar = () => {
  const [input, setInput] = useState("");
  return (
    <form>
      <FormInput value={input} onChange={(e) => setInput(e.target.value)} />
      {/* {Search Icon} */}
    </form>
  );
};

export default SearchBar;
