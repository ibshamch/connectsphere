import SidebarLayout from "../../components/SidebarLayout";
import Feed from "../../components/Feed";
import useAuthContext from "../../hooks/use-auth-context";
import { useEffect } from "react"; // Added useState import
import Container from "../../components/Container";
import AddAccountList from "../../components/AddAccountList";
import useFetchAndShuffleAccounts from "../../hooks/use-fetch-accounts-n-shuffle";
const Home = () => {
  const { checkAuthentication } = useAuthContext();
  const { fetchAllAccounts, allAccounts } = useFetchAndShuffleAccounts();

  useEffect(() => {
    checkAuthentication();
    fetchAllAccounts();
  }, [checkAuthentication, fetchAllAccounts]);

  return (
    <SidebarLayout>
      <Feed />
      <Container className="basis-1/5">
        <AddAccountList allAccounts={allAccounts} />
      </Container>
    </SidebarLayout>
  );
};

export default Home;
