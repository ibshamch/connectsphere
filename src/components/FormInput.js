import useThemeContext from "../hooks/use-theme-context";
const FormInput = ({ value, name, className, placeholder, type, ...rest }) => {
  const { darkTheme } = useThemeContext();
  return (
    <input
      value={value}
      name={name}
      className={`border-b focus:pb-3 pt-2 pb-2 pl-2 outline-none ${
        darkTheme
          ? "border-gray-300  bg-inputDark border-solid"
          : " border-black bg-inputLight border-solid"
      }  ${className}`}
      placeholder={placeholder}
      type={type}
      {...rest}
    />
  );
};

export default FormInput;
