import Container from "../components/Container";
import FormInput from "../components/FormInput";
import Button from "../components/Button";
import Error from "../components/Error";
import useAuthContext from "../hooks/use-auth-context";

const ForgottenPassword = () => {
  const {
    setEmailForgotten,
    userExistsForgotten,
    handleForgottenSubmit,
    emailForgotten,
  } = useAuthContext();

  return (
    <Container className="flex-col mt-32">
      <h1 className="self-center text-3xl"> Forgotten Password</h1>

      <form
        onSubmit={handleForgottenSubmit}
        className="flex   flex-col items-center mt-9"
      >
        <FormInput
          type="text"
          placeholder="Enter Your Email"
          className="min-w-64"
          value={emailForgotten}
          onChange={(e) => setEmailForgotten(e.target.value)}
        />
        {!userExistsForgotten && (
          <Error className="mt-2 mb-2 text-xs">
            No Account registered with this email
          </Error>
        )}
        <Button primary roundedFull type="submit" className="mt-10">
          Find Your Account
        </Button>
      </form>
    </Container>
  );
};

export default ForgottenPassword;
