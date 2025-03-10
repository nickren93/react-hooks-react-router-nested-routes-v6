//import { useEffect, useState } from "react";
//added useOutletContext at below:
import { useParams, useOutletContext } from "react-router-dom";

function UserProfile() {
  //const [user, setUser] = useState({});
  const params = useParams();
  //add following codes:
  const users = useOutletContext();
  const user = users.find(user => user.id === parseInt(params.id));

  /* delete following codes:
  const userId = params.id;
  
  useEffect(() =>{
    fetch(`http://localhost:4000/users/${userId}`)
    .then(r => r.json())
    .then(data => setUser(data))
    .catch(error => console.error(error));
  }, [userId]);
  */

  if(!user.name){
    return <h1>Loading...</h1>;
  };

  return(  
      <aside>
        <h1>{user.name}</h1>
      </aside>
  );
};

export default UserProfile;