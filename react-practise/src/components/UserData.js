import * as React from "react";
import { useDispatch, useSelector } from "react-redux";
import { FirstPage, SecondPage } from "../store/actions";
import { useState, useEffect } from "react";

const UserData = () => {
  const [users, setUser] = useState([]);
  const page = useSelector((state) => state.Pages.page);
  const dispatch = useDispatch();
  const getData = async (link) => {
    const res = await fetch(link);
    const json = await res.json();
    setUser(json.data);
  };
  useEffect(() => {
    if (page === 1) {
      getData("https://reqres.in/api/users/");
    } else {
      getData("https://reqres.in/api/users?page=2");
    }
  }, [page]);

  return (
    <center>
      <h1>Hello from the UserData</h1>
      {users &&
        users.map((user) => {
          return (
            <div>
              {" "}
              {user.id}
              <h1>{user.first_name}</h1>
              <h2>{user.email}</h2>
              <img src={user.avatar} alt="img" />
            </div>
          );
        })}
      <button
        onClick={() => {
          dispatch(FirstPage());
        }}
      >
        1
      </button>
      <button
        onClick={() => {
          dispatch(SecondPage());
        }}
      >
        2
      </button>
    </center>
  );
};

export default UserData;
