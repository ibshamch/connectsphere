import SidebarLayout from "../../components/SidebarLayout";
import Feed from "../../components/Feed";
import useAuthContext from "../../hooks/use-auth-context";
import { useEffect, useState } from "react"; // Added useState import
import Container from "../../components/Container";
import FetchData from "../../dbFunc/FetchData";
import AddAccountList from "../../components/AddAccountList";
import { useParams } from "react-router-dom";
const Home = () => {
  const { checkAuthentication } = useAuthContext();
  const [allAccounts, setAllAccounts] = useState([]);
  const { id } = useParams();

  const shuffleArray = (array) => {
    const shuffledArray = [...array];
    for (let i = shuffledArray.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [shuffledArray[i], shuffledArray[j]] = [
        shuffledArray[j],
        shuffledArray[i],
      ];
    }
    return shuffledArray;
  };

  const fetchAllAccounts = async () => {
    try {
      const accounts = await FetchData("accounts");
      const accountToNotAdd = accounts.filter((account) => {
        return account.id !== id;
      });

      const shuffledAccounts = shuffleArray(accountToNotAdd);

      setAllAccounts(shuffledAccounts);
    } catch (error) {
      console.error("Error fetching accounts:", error);
    }
  };

  useEffect(() => {
    checkAuthentication();
    fetchAllAccounts();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

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
