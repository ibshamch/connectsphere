import { Outlet } from "react-router-dom";
import SearchBar from "./SearchBar";

const FeedNavigation = () => {
  return (
    <div>
      <div>
        <div className="profile-details">
          {/* {profileicon} */}
          <h2>Profile Name</h2>
        </div>
        <SearchBar />
        <div className="user-settings">
          {/* 
            3 icons: 
            Setting,
            Logout,
            DarkTheme,LightTheme
            */}
        </div>
      </div>
      <Outlet />
    </div>
  );
};

export default FeedNavigation;
