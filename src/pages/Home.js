import { useState, useEffect } from "react";
import UserCard from "../components/UserCard";
//add import Outlet:
import { Outlet, useOutletContext } from "react-router-dom";

function Home() {

  /*
  const [users, setUsers] = useState([]);

  useEffect(() =>{
    fetch("http://localhost:4000/users")
      .then(r => r.json())
      .then(data => setUsers(data))
      .catch(error => console.error(error));
  }, []);
  */

  const users = useOutletContext();
  
  const userList = users.map(user =>{
    return <UserCard key={user.id} user={user}/>;
  });

  return (
    <main>
      <h1>Home!</h1>
      <Outlet context={users}/>
      {userList}
    </main>
  );
};

export default Home;