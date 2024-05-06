import { Routes, Route } from "react-router-dom";
import Homepage from "./pages/Homepage";
import LoginPage from "./pages/LoginPage";
import NavigationBar from "./components/NavigationBar";
import useThemeContext from "./hooks/use-theme-context";
import SignupPage from "./pages/SignupPage";
import SignUpSuccessful from "./pages/SignUpSuccessful";
import ForgottenPassword from "./pages/ForgottenPassword";
import IdentifyAccount from "./pages/IdentifyAccount";
import ResetPassword from "./pages/ResetPassword";
import useAuthContext from "./hooks/use-auth-context";
export default function App() {
  const { darkTheme } = useThemeContext();
  const { handleAccount } = useAuthContext();
  return (
    <div
      className={`app min-h-screen ${
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

        <Route path="/feed/:id" element={<h1>Feed</h1>} />
      </Routes>
    </div>
  );
}
