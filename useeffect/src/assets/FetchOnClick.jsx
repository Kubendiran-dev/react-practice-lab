import React, { useState } from "react";

const FetchOnClick = () => {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(false);

  const fetchData = () => {
    console.log("running");
    
    setLoading(true); 

    fetch("https://jsonplaceholder.typicode.com/users")
      .then((res) => res.json())
      .then((data) => {
        setUsers(data);      
        setLoading(false);   
      })
      .catch((err) => {
        console.log(err);
        setLoading(false);
      });
  };

  return (
    <div>
      <button onClick={fetchData}>Fetch Users</button>

      
      {loading && <p>Loading...</p>}

     
      {!loading &&
        users.map((user) => (
          <p key={user.id}>{user.username}</p>
        ))}
    </div>
  );
};

export default FetchOnClick;
