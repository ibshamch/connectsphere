import Container from "../../components/Container";
import FormInput from "../../components/FormInput";
import Button from "../../components/Button";
import Remember from "../../components/Remember";
import DropDown from "../../components/DropDown";
import Error from "../../components/Error";
import Modal from "../../components/Modal";
import Policy from "../../components/Policy";
import useAuthContext from "../../hooks/use-auth-context";
const SignupPage = () => {
  const {
    recoveryCode,
    UserAlreadyExist,
    showModal,
    setRecoveryCode,
    setShowModal,
    navigate,
    handleSignUpSubmit,
  } = useAuthContext();

  return (
    <Container className="flex-col max-w-xl my-0 mx-auto p-10 mt-9">
      <Container className="justify-center items-center mb-5">
        <h1 className="text-3xl">Sign Up</h1>
      </Container>
      <form
        onSubmit={handleSignUpSubmit}
        className="flex flex-col items-center justify-center mt-4 gap-8 "
      >
        <Container className="flex-col sm:flex-row items-center w-full justify-between gap-5">
          <FormInput
            type="text"
            name="firstname"
            placeholder="First Name"
            className="text-lg focus:pb-3"
            required
          />
          <FormInput
            type="text"
            name="lastname"
            className="text-lg focus:pb-3"
            placeholder="Last Name"
            required
          />
        </Container>
        <Container className="sm:w-full">
          <FormInput
            type="email"
            name="email"
            placeholder="Email"
            className="sm:w-full text-lg focus:pb-3"
            required
          />
        </Container>
        <Container className="sm:w-full sm:flex-row gap-6 flex-col  justify-between">
          <FormInput
            type="password"
            name="password"
            placeholder="Create Password"
            required
            className="text-lg focus:pb-3"
          />
          <FormInput
            type="password"
            placeholder="Confirm Password"
            required
            className="text-lg focus:pb-3"
          />
        </Container>

        <Container className="w-56 gap-6 align-center justify-center ">
          <DropDown
            name="date"
            valuesArr={Array.from({ length: 31 }, (_, index) => index + 1)}
          >
            Date
          </DropDown>
          <DropDown
            name="month"
            valuesArr={Array.from({ length: 12 }, (_, index) => index + 1)}
          >
            Month
          </DropDown>
          <DropDown
            name="year"
            valuesArr={Array.from(
              { length: 2024 - 1920 + 1 },
              (_, index) => 2024 - index
            )}
          >
            Year
          </DropDown>
        </Container>
        <Container className="flex-col justify-center">
          <FormInput
            className="text-sm focus:pb-3"
            name="recoverycode"
            value={recoveryCode}
            onChange={(e) => setRecoveryCode(e.target.value)}
            placeholder="Recovery Code"
            type="text"
          />
          {recoveryCode.length > 0 && (
            <Remember>Don't forget this code !</Remember>
          )}
        </Container>
        {UserAlreadyExist && <Error>User Already Exists!</Error>}
        <Button type="submit" roundedFull welcome>
          Join Application
        </Button>
      </form>

      {showModal && (
        <Modal
          onSet={setShowModal}
          actionBar={
            <Button
              onClick={() => {
                if (!UserAlreadyExist) {
                  setShowModal(false);
                  navigate("/auth/signupsuccessful");
                }
              }}
              primary
              className="self-end rounded-full text-sm"
            >
              Agree
            </Button>
          }
        >
          {!UserAlreadyExist ? (
            <Policy className="max-h-56" />
          ) : (
            <Error>User Already Exists</Error>
          )}
        </Modal>
      )}
    </Container>
  );
};

export default SignupPage;
