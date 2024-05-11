import { Routes, Route } from "react-router-dom";
import Homepage from "./pages/auth/Homepage";
import LoginPage from "./pages/auth/LoginPage";
import NavigationBar from "./components/NavigationBar";
import useThemeContext from "./hooks/use-theme-context";
import SignupPage from "./pages/auth/SignupPage";
import SignUpSuccessful from "./pages/auth/SignUpSuccessful";
import ForgottenPassword from "./pages/auth/ForgottenPassword";
import IdentifyAccount from "./pages/auth/IdentifyAccount";
import ResetPassword from "./pages/auth/ResetPassword";
import useAuthContext from "./hooks/use-auth-context";
import FeedNavigation from "./components/FeedNavigation";
import YourPosts from "./pages/feed/YourPosts";
import Notifications from "./pages/feed/Notifications";
import Chat from "./pages/feed/Chat";
import Market from "./pages/feed/Market";
import ReadQuran from "./pages/feed/ReadQuran";
import Home from "./pages/feed/Home";
export default function App() {
  const { darkTheme } = useThemeContext();
  const { handleAccount } = useAuthContext();
  return (
    <div
      className={`app min-h-screen max-h-screen ${
        darkTheme ? "bg-darkthemebg text-white" : "bg-lightthemebg text-black"
      }`}
    >
      <Routes>
        <Route path="/" element={<NavigationBar />}>
          <Route index element={<Homepage />} />
          <Route element={<SignupPage />} path="/auth/signup" />
          <Route path="/auth/signupsuccessful" element={<SignUpSuccessful />} />
          <Route
            path="/auth/login"
            element={<LoginPage onHandleAccount={handleAccount} />}
          />
          <Route
            path="/auth/forgottenpassword"
            element={<ForgottenPassword />}
          />
          <Route
            path="/auth/identifyaccount/:id"
            element={<IdentifyAccount />}
          />
          <Route path="/auth/resetpassword/:id" element={<ResetPassword />} />
        </Route>

        <Route path="/feed" element={<FeedNavigation />}>
          <Route path="/feed/:id" element={<Home />} />
          <Route path="/feed/yourposts/:id" element={<YourPosts />} />
          <Route path="/feed/notifications/:id" element={<Notifications />} />
          <Route path="/feed/chat/:id" element={<Chat />} />
          <Route path="/feed/market/:id" element={<Market />} />
          <Route path="/feed/readquran/:id" element={<ReadQuran />} />
        </Route>
      </Routes>
    </div>
  );
}
