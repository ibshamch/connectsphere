import React from "react";
import Container from "./Container";
import { Link, useLocation, useParams } from "react-router-dom";
import useThemeContext from "../hooks/use-theme-context";

const Sidebar = ({ className, linkStyles }) => {
  const { id } = useParams();
  const { darkTheme } = useThemeContext();
  const { pathname } = useLocation();
  const data = [
    { label: "Home", path: `/feed/${id}`, id: 1 },
    { label: "Your Posts", path: `/feed/yourposts/${id}`, id: 2 },
    { label: "Notifications", path: `/feed/notifications/${id}`, id: 3 },
    { label: "Chat", path: `/feed/chat/${id}`, id: 4 },
    { label: "Market", path: `/feed/market/${id}`, id: 5 },
    { label: "Read Quran", path: `/feed/readquran/${id}`, id: 6 },
  ];
  const renderedLinks = data.map((link) => {
    return (
      <Link
        to={link.path}
        className={`${linkStyles} max-w-56 ${
          darkTheme
            ? pathname === link.path
              ? "bg-inputDark "
              : "none"
            : pathname === link.path
            ? "bg-inputDark text-white"
            : "none"
        }
        
        ${
          darkTheme ? "hover:bg-inputDark" : "hover:bg-black hover:text-white"
        }`}
        key={link.id}
      >
        {link.label}
      </Link>
    );
  });
  return <Container className={`${className} mt-5`}>{renderedLinks}</Container>;
};

export default Sidebar;
