import { Outlet } from "react-router-dom";
import SearchBar from "./SearchBar";
import { CgProfile } from "react-icons/cg";
import { IoMdSettings } from "react-icons/io";
import { IoIosLogOut } from "react-icons/io";
import { IoSunnyOutline } from "react-icons/io5";
import { IoMoonOutline } from "react-icons/io5";
import Container from "./Container";
import useThemeContext from "../hooks/use-theme-context";
import useAuthContext from "../hooks/use-auth-context";
import PutData from "../dbFunc/PutData";
const FeedNavigation = () => {
  const { darkTheme, handleTheme } = useThemeContext();
  const { accountDetails, handleAccount, navigate } = useAuthContext();
  const { firstName, lastName, id } = accountDetails;
  const handleLogout = async () => {
    await PutData("accounts", id, {
      ...accountDetails,
      loginState: false,
    });
    handleAccount({});
    navigate("/");
  };

  return (
    <div className="px-6 py-4">
      <Container className="justify-between">
        <Container className="profile-details items-center gap-3">
          <CgProfile className="text-4xl" />
          <h2>
            {firstName} {lastName}
          </h2>
        </Container>
        <SearchBar
          className={`border-2 py-1 px-3 ${
            darkTheme ? "bg-inputDark " : "bg-inputLight"
          } `}
        />
        <Container className="user-settings gap-4 items-center">
          <IoMdSettings className="text-4xl cursor-pointer" />
          <IoIosLogOut
            className="text-4xl text-red-500 cursor-pointer"
            onClick={handleLogout}
          />
          {darkTheme ? (
            <IoSunnyOutline
              className="text-3xl cursor-pointer"
              onClick={handleTheme}
            />
          ) : (
            <IoMoonOutline
              className="text-3xl  cursor-pointer"
              onClick={handleTheme}
            />
          )}
        </Container>
      </Container>
      <Outlet />
    </div>
  );
};

export default FeedNavigation;
