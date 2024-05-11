import { createContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import PostData from "../dbFunc/PostData";
import FetchData from "../dbFunc/FetchData";
import PutData from "../dbFunc/PutData";

const AuthContext = createContext();

function AuthProvider({ children }) {
  const [accountDetails, setAccountDetails] = useState({});
  const handleAccount = (userData) => {
    setAccountDetails(userData);
  };
  const [recoveryCode, setRecoveryCode] = useState("");
  const [UserAlreadyExist, setUserAlreadyExist] = useState(false);
  const [showModal, setShowModal] = useState(false);
  const navigate = useNavigate();
  async function checkIfUserAlreadyExists(account) {
    const data = await FetchData("accounts");
    const accountFound = data.find((acc) => {
      return acc.email === account.email;
    });
    if (accountFound) {
      setUserAlreadyExist(true);
      return;
    } else {
      await PostData("accounts", account);
      setUserAlreadyExist(false);
      setShowModal(true);
    }
  }
  async function handleSignUpSubmit(event) {
    event.preventDefault();
    const getFormData = new FormData(event.target);
    const obj = {
      firstName: getFormData.get("firstname"),
      lastName: getFormData.get("lastname"),
      email: getFormData.get("email"),
      password: getFormData.get("password"),
      accountCreatedOn: `${getFormData.get("date")}/${getFormData.get(
        "month"
      )}/${getFormData.get("year")}`,
      recoveryCode: getFormData.get("recoverycode"),
      loginState: false,
      yourPosts: [],
      SentFriendRequests: [],
    };

    checkIfUserAlreadyExists(obj);
    setRecoveryCode("");
  }
  const [emailLogin, setEmailLogin] = useState("");
  const [passwordLogin, setPasswordLogin] = useState("");
  const [userExists, setUserExists] = useState(true);
  async function handleLoginSubmit(e) {
    e.preventDefault();
    const data = await FetchData("accounts");
    const findAccount = data.find((account) => {
      return account.email === emailLogin && account.password === passwordLogin;
    });

    if (findAccount) {
      const data = await PutData("accounts", findAccount.id, {
        ...findAccount,
        loginState: true,
      });
      setUserExists(true);
      setAccountDetails(data);
      setEmailLogin("");
      setPasswordLogin("");
      navigate(`/feed/${data.id}`);
    } else {
      setUserExists(false);
    }
  }

  const [emailForgotten, setEmailForgotten] = useState("");
  const [userExistsForgotten, setUserExistsForgotten] = useState(true);
  const handleForgottenSubmit = async (e) => {
    e.preventDefault();
    const data = await FetchData("accounts");
    const findAccount = data.find((account) => {
      return account.email === emailForgotten;
    });
    if (findAccount) {
      setUserExistsForgotten(true);
      navigate(`/auth/identifyaccount/${findAccount.id}`);
    } else {
      setUserExistsForgotten(false);
    }
  };
  async function checkAuthentication() {
    const data = await FetchData("accounts");
    const authenticatedAccount = data.find((account) => {
      return account.loginState === true;
    });
    if (authenticatedAccount) {
      navigate(`/feed/${authenticatedAccount.id}`);
      setAccountDetails(authenticatedAccount);
    } else {
      return;
    }
  }

  const [emailDetails, setEmailDetails] = useState({});
  const { firstName, lastName, email } = emailDetails;

  const [emailResetDetails, setEmailResetDetails] = useState({});
  const [code, setCode] = useState("");
  const [passwordReset, setPasswordReset] = useState("");
  const [confirmPasswordReset, setConfirmPasswordReset] = useState("");
  const [passwordChanged, setPasswordChanged] = useState(false);

  const recoveryCodeReset = emailResetDetails.recoveryCode;
  const recoveryMatch = Boolean(code === recoveryCodeReset);

  const dataToShare = {
    recoveryCodeReset,
    recoveryMatch,
    emailResetDetails,
    setEmailResetDetails,
    code,
    setCode,
    passwordReset,
    setPasswordReset,
    confirmPasswordReset,
    setConfirmPasswordReset,
    passwordChanged,
    setPasswordChanged,
    emailDetails,
    setEmailDetails,
    firstName,
    lastName,
    email,
    accountDetails,
    setAccountDetails,
    handleAccount,
    recoveryCode,
    UserAlreadyExist,
    showModal,
    navigate,
    checkIfUserAlreadyExists,
    setRecoveryCode,
    setShowModal,
    handleSignUpSubmit,
    emailLogin,
    passwordLogin,
    userExists,
    handleLoginSubmit,
    setEmailLogin,
    setPasswordLogin,
    setEmailForgotten,
    userExistsForgotten,
    handleForgottenSubmit,
    emailForgotten,
    checkAuthentication,
  };

  return (
    <AuthContext.Provider value={dataToShare}>{children}</AuthContext.Provider>
  );
}

export default AuthContext;
export { AuthProvider };
