import Container from "./Container";
import { IoBulbOutline } from "react-icons/io5";
import classNames from "classnames";
import useThemeContext from "../hooks/use-theme-context";

const Remember = ({ children }) => {
  const { darkTheme } = useThemeContext();
  const classes = classNames(
    "rounded-2xl text-xs items-center gap-2 justify-center mt-2 py-2 px-4",
    darkTheme ? "bg-yellow-800" : "bg-yellow-200"
  );
  return (
    <Container className={classes}>
      <IoBulbOutline />
      {children}
    </Container>
  );
};

export default Remember;
