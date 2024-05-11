import useThemeContext from "../hooks/use-theme-context";
import Button from "./Button";
import Container from "./Container";
import { CgProfile } from "react-icons/cg";

const Account = ({ account }) => {
  const { firstName, lastName, email } = account;
  const { darkTheme } = useThemeContext();
  return (
    <Container
      className={`flex-col mt-7 mr-3 ${
        darkTheme ? "border-inputLight border-2" : "border-inputDark border-2"
      } p-4 rounded-xl`}
    >
      <Container className="user-details flex gap-4 items-center">
        <CgProfile className="text-4xl" />
        <Container className="flex-col">
          <p>
            {firstName} {lastName}
          </p>
          <span className="text-xs ">@{email}</span>
        </Container>
      </Container>

      <Container className="flex items-center justify-center gap-6 mt-4">
        <Button primary rounded>
          Add Friend
        </Button>
        <Button warning rounded>
          Ignore
        </Button>
      </Container>
    </Container>
  );
};

export default Account;
