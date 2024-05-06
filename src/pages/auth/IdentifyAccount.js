import { useCallback, useEffect } from "react";
import { useParams } from "react-router-dom";
import FetchData from "../../dbFunc/FetchData";
import Container from "../../components/Container";
import { CgProfile } from "react-icons/cg";
import Button from "../../components/Button";
import useThemeContext from "../../hooks/use-theme-context";
import useAuthContext from "../../hooks/use-auth-context";

const IdentifyAccount = () => {
  const { setEmailDetails, firstName, lastName, email, navigate } =
    useAuthContext();
  const { id } = useParams();
  const { darkTheme } = useThemeContext();

  // eslint-disable-next-line react-hooks/exhaustive-deps
  const stableGetUserDetails = useCallback(async () => {
    const data = await FetchData("accounts");
    const findAccount = data.find((account) => {
      return account.id === id;
    });
    setEmailDetails(findAccount);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  const handleSubmit = (e) => {
    e.preventDefault();
    navigate(`/auth/resetpassword/${id}`);
  };
  useEffect(() => {
    stableGetUserDetails();
  }, [stableGetUserDetails]);
  return (
    <Container
      className={`${
        darkTheme ? "bg-gray-600 " : "bg-gray-200"
      } flex-col items-center mt-44 max-w-96 my-0 mx-auto rounded py-10 px-5`}
    >
      <form onSubmit={handleSubmit} className="flex flex-col">
        <div className="profile-details flex justify-between min-w-64">
          <div className="basis-20">
            <CgProfile className="text-5xl " />
          </div>
          <div className="flex flex-col items-start basis-64">
            <div className="name text-xl">{firstName + " " + lastName}</div>
            <div className="handle text-xs">{email}</div>
          </div>
        </div>
        <Button type="submit" primary roundedFull className="mt-5">
          This is my account
        </Button>
      </form>
    </Container>
  );
};

export default IdentifyAccount;
