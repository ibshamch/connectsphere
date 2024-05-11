import classNames from "classnames";

const Button = ({
  children,
  type,
  className,
  rounded,
  roundedFull,
  primary,
  disable,
  welcome,
  warning,
  ...rest
}) => {
  const classes = classNames(
    "py-2.5 px-5 text-white bg-black",
    {
      "bg-primarybtn  hover:bg-blue-600": primary,
      "bg-welcomebtn hover:bg-green-600": welcome,
      "bg-red-500 hover:bg-red-600": warning,
      "rounded-xl": rounded,
      "rounded-full": roundedFull,
    },
    className
  );
  return (
    <button type={type} {...rest} className={classes}>
      {children}
    </button>
  );
};

export default Button;
