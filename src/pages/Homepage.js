import Container from "../components/Container";
import Panel from "../components/Panel";
import { FaEnvelope } from "react-icons/fa";
import Button from "../components/Button";
import useThemeContext from "../hooks/use-theme-context";
import useAuthContext from "../hooks/use-auth-context";
import { useEffect } from "react";
const Homepage = () => {
  const { darkTheme } = useThemeContext();

  const { navigate, checkAuthentication } = useAuthContext();

  useEffect(() => {
    checkAuthentication();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const handleGoLoginPage = () => {
    navigate("/auth/login");
  };
  const handleGoSignUpPage = () => {
    navigate("/auth/signup");
  };

  return (
    <Container className="flex-col justify-center items-center mt-40 p-5 ">
      <Panel>
        <h1 className=" font-light text-6xl mb-3 hidden sm:block ">
          <span className={`text-logoheadingConnect`}>Connect</span>
          <span
            className={`${
              darkTheme ? "text-lightthemebg" : "text-darkthemebg"
            } `}
          >
            Sphere
          </span>
        </h1>
        <FaEnvelope
          className={`ml-4 text-6xl ${
            darkTheme ? "text-lightthemebg" : "text-darkthemebg"
          }`}
        />
      </Panel>
      <p className="italic mt-2 text-lightSubtitlegraytext ">
        Your Social Universe Awaits!
      </p>
      <Container className="flex-col gap-3 align-center justify-center  mt-5">
        <Button
          onClick={handleGoLoginPage}
          className="pl-24 pr-24"
          rounded
          primary
        >
          Login
        </Button>
        <Button onClick={handleGoSignUpPage} className="px-24 " rounded primary>
          Signup
        </Button>
      </Container>
    </Container>
  );
};

export default Homepage;
