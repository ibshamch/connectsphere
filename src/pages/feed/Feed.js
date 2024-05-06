import useAuthContext from "../../hooks/use-auth-context";
const Feed = () => {
  const { accountDetails } = useAuthContext();
  console.log(accountDetails);
  return <div></div>;
};

export default Feed;
