import { useState } from "react";
import useThemeContext from "../hooks/use-theme-context";

const DropDown = ({ children, valuesArr, name, ...rest }) => {
  const { darkTheme } = useThemeContext();
  const [isOpen, setIsOpen] = useState(false);
  const [value, setValue] = useState("");
  const handleClick = () => {
    setIsOpen(!isOpen);
  };

  const options = valuesArr.map((value) => (
    <option key={value} value={value} className="text-center">
      {value}
    </option>
  ));

  return (
    <select
      onClick={handleClick}
      value={value}
      name={name}
      onChange={(e) => setValue(e.target.value)}
      className={`w-20 text-center border-2 rounded-md ${
        darkTheme
          ? "border-lightthemebg text-black"
          : "border-darkthemebg text-black"
      }`}
    >
      <option hidden className="text-center">
        {children}
      </option>
      {options}
    </select>
  );
};

export default DropDown;
