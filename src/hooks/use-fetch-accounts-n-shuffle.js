import { useState } from "react";
import { useParams } from "react-router-dom";
import FetchData from "../dbFunc/FetchData";
function useFetchAndShuffleAccounts() {
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
  return {
    allAccounts,
    fetchAllAccounts,
  };
}

export default useFetchAndShuffleAccounts;
