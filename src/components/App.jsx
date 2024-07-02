import s from "./App.module.css";
import Profile from "./Profile/Porofile";
import userData from "../assets/userData.json";
import FriendList from "./FriendList/FriendList";
import friends from "../assets/friends.json";
import TransactionHistory from "./TransactionHistory/TransactionHistory";
import transactions from "../assets/transactions.json";

function App() {
  return (
    <>
      <Profile userData={userData} />
      <FriendList friends={friends} />
      <TransactionHistory transactions={transactions} />
    </>
  );
}

export default App;
