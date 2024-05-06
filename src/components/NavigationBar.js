import { FaEnvelope } from "react-icons/fa";
import { IoSunnyOutline } from "react-icons/io5";
import { IoMoonOutline } from "react-icons/io5";
import useThemeContext from "../hooks/use-theme-context";
import Panel from "./Panel";
import { Link } from "react-router-dom";
import { Outlet } from "react-router-dom";
const NavigationBar = () => {
  const { darkTheme, handleTheme } = useThemeContext();

  return (
    <>
      <Panel className={`pt-5 px-5 ${darkTheme ? " text-white" : null}`}>
        <Link to="/">
          <Panel>
            <FaEnvelope
              className={`mr-4 text-3xl ${
                darkTheme ? "text-gray-200" : "text-blue-950"
              }`}
            />
            <h1 className="text-3xl font-light hidden sm:block">
              <span className="text-blue-700">Connect</span>
              <span
                className={`${darkTheme ? "text-gray-200" : "text-blue-950"}`}
              >
                Sphere
              </span>
            </h1>
          </Panel>
        </Link>
        {darkTheme ? (
          <IoSunnyOutline
            onClick={handleTheme}
            className="text-2xl cursor-pointer"
          />
        ) : (
          <IoMoonOutline
            onClick={handleTheme}
            className="text-2xl cursor-pointer"
          />
        )}
      </Panel>
      <Outlet />
    </>
  );
};

export default NavigationBar;
