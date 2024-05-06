import { useCallback, useEffect } from "react";
import { useParams } from "react-router-dom";
import FetchData from "../../dbFunc/FetchData";
import Container from "../../components/Container";
import FormInput from "../../components/FormInput";
import useThemeContext from "../../hooks/use-theme-context";
import Button from "../../components/Button";
import Error from "../../components/Error";
import Success from "../../components/Success";
import PutData from "../../dbFunc/PutData";
import useAuthContext from "../../hooks/use-auth-context";
const ResetPassword = () => {
  const {
    setEmailResetDetails,
    code,
    setCode,
    passwordReset,
    setPasswordReset,
    confirmPasswordReset,
    setPasswordChanged,
    setConfirmPasswordReset,
    passwordChanged,
    recoveryCodeReset,
    recoveryMatch,
  } = useAuthContext();

  const { id } = useParams();
  const { darkTheme } = useThemeContext();
  const getUserDetails = useCallback(async () => {
    const data = await FetchData("accounts");
    const findAccount = data.find((account) => {
      return account.id === id;
    });
    setEmailResetDetails(findAccount);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const data = await FetchData("accounts");
    const findAccount = data.find((account) => {
      return account.id === id;
    });
    await PutData("accounts", id, {
      ...findAccount,
      password: passwordReset,
      loginState: false,
    });
    setPasswordChanged(true);
    setCode("");
    setPasswordReset("");
    setConfirmPasswordReset("");
  };

  useEffect(() => {
    getUserDetails();
  }, [getUserDetails]);
  return (
    <div className="mt-16 flex flex-col gap-5">
      <h1 className="self-center text-2xl">Reset Password</h1>

      <Container
        className={` flex flex-col ${
          darkTheme ? "bg-gray-600 " : "bg-gray-200"
        }  rounded-2xl p-10 max-w-96  my-0 mx-auto `}
      >
        {passwordChanged && (
          <Success className="text-xs mb-1">
            Password Changed Successfully
          </Success>
        )}
        <form onSubmit={handleSubmit} className="flex flex-col px-8 py-4 gap-5">
          <FormInput
            type="password"
            placeholder="Enter Recovery Code"
            value={code}
            className="mb-2"
            onChange={(e) => {
              setCode(e.target.value);
            }}
          />
          {code.length > 0
            ? code !== recoveryCodeReset && (
                <Error className="text-xs text-center">
                  Code Does'nt Match
                </Error>
              )
            : null}
          {code.length > 0
            ? code === recoveryCodeReset && (
                <Success className="text-xs text-center">
                  Recovery Matched
                </Success>
              )
            : null}
          {recoveryMatch && (
            <>
              <FormInput
                type="password"
                placeholder="Enter new password"
                value={passwordReset}
                className="mt-2"
                onChange={(e) => setPasswordReset(e.target.value)}
              />
              <FormInput
                type="password"
                placeholder="Confirm new password"
                className="mb-2"
                value={confirmPasswordReset}
                onChange={(e) => setConfirmPasswordReset(e.target.value)}
              />
            </>
          )}
          {recoveryCodeReset === code &&
            passwordReset.length > 0 &&
            confirmPasswordReset.length > 0 &&
            (passwordReset.length > 0 &&
            confirmPasswordReset.length > 0 &&
            passwordReset === confirmPasswordReset ? (
              <Success className="text-xs text-center">
                Passwords Matched
              </Success>
            ) : (
              <Error className="text-xs text-center">
                Passwords don't match
              </Error>
            ))}

          <Button type="submit" className={`mt-2`} primary roundedFull>
            Confirm
          </Button>
        </form>
      </Container>
    </div>
  );
};

export default ResetPassword;
