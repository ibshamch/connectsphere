import Container from "../../components/Container";
import FormInput from "../../components/FormInput";
import Button from "../../components/Button";
import Error from "../../components/Error";
import { Link } from "react-router-dom";
import useThemeContext from "../../hooks/use-theme-context";
import useAuthContext from "../../hooks/use-auth-context";
import { useEffect } from "react";
const LoginPage = () => {
  const { darkTheme } = useThemeContext();

  const {
    navigate,
    emailLogin,
    passwordLogin,
    setEmailLogin,
    setPasswordLogin,
    userExists,
    handleLoginSubmit,
    checkAuthentication,
  } = useAuthContext();
  useEffect(() => {
    checkAuthentication();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <Container className="flex-col items-center mt-32">
      <h1 className="text-3xl">Login</h1>
      <form onSubmit={handleLoginSubmit} className="flex flex-col gap-4 mt-5">
        <FormInput
          value={emailLogin}
          onChange={(e) => setEmailLogin(e.target.value)}
          type="email"
          placeholder="Enter Email"
          className="self-center"
        />
        <FormInput
          value={passwordLogin}
          onChange={(e) => setPasswordLogin(e.target.value)}
          type="password"
          placeholder="Enter Password"
          className="self-center"
        />
        <Link
          to="/auth/forgottenpassword"
          className={`self-center underline text-xs ${
            darkTheme ? "text-lightthemebg" : "text-darkthemebg"
          }`}
        >
          Forgotten Password?
        </Link>

        <Button className="self-center px-10" type="submit" primary roundedFull>
          Login
        </Button>
      </form>
      {!userExists && (
        <Error className="mt-3 text-xs">
          No user registered with this Email/Password
        </Error>
      )}
      <Button
        onClick={() => {
          navigate("/auth/signup");
        }}
        className="mt-8"
        primary
        roundedFull
      >
        Create New Account
      </Button>
    </Container>
  );
};

export default LoginPage;
