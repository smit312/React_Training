import React, { useState, useEffect } from "react";

const ApiData = () => {
  const [users, setUser] = useState([]);
  const data = async () => {
    const res = await fetch("https://reqres.in/api/users/");
    const json = await res.json();
    setUser(json.data);
  };
  useEffect(() => {
    data();
  }, []);

  return (
    <center>
      <h2>hello form the api data</h2>
      {users &&
        users.map((user) => {
          return (
            <div key={user.id}>
              <strong>{user.first_name}</strong>
              <p>{user.email}</p>
              <img src={user.avatar} alt="img" />
            </div>
          );
        })}
    </center>
  );
};

export default ApiData;
