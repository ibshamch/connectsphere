import Account from "./Account";
import Container from "./Container";

const AddAccountList = ({ allAccounts }) => {
  return (
    <Container className="w-full flex-col mt-4 ">
      <h2 className="text-xl pl-10">People You May Know</h2>

      {allAccounts &&
        allAccounts.length > 0 &&
        allAccounts.map((account, index) => {
          if (index < 3) {
            return <Account account={account} key={account.id} />;
          } else {
            return null;
          }
        })}
    </Container>
  );
};

export default AddAccountList;
