import React from "react";
import Sidebar from "./Sidebar";
import useThemeContext from "../hooks/use-theme-context";

const SidebarLayout = ({ children }) => {
  const { darkTheme } = useThemeContext();
  return (
    <div className="flex justify-between  mt-4 h-screen ">
      <Sidebar
        className="flex flex-col gap-2 basis-1/5 py-2"
        linkStyles={` ${
          darkTheme ? "border-inputDark" : "border-inputLight"
        } py-4 m-2 text-center rounded-xl border-2 shadow-inner shadow-black shadow-sm ml-14`}
      />
      {children}
    </div>
  );
};

export default SidebarLayout;
