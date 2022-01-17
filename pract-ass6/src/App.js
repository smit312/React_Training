import "./App.css";
import * as React from "react";

import { useSelector, useDispatch } from "react-redux";
import { FirstPage, SecondPage } from "./actions/index";
import { useEffect, useState } from "react";

function App() {
  const [inHover, setHover] = useState(false);
  const [users, setUsers] = useState([]);
  const page = useSelector((state) => state.ChangePages.page);
  const dispatch = useDispatch();

  const getData = async (link) => {
    try {
      const res = await fetch(link);
      const json = await res.json();
      console.log(json);
      setUsers(json.data);
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    if (page === 1) {
      getData("https://reqres.in/api/users/");
    } else {
      getData("https://reqres.in/api/users?page=2");
    }
  }, [page]);

  return (
    <div className="main">
      <table>
        <thead>
          <th className="settitle1">firstname</th>
          <th className="settitle2">lastname</th>
          <th className="settitle3">email</th>
        </thead>
        {/* start card  */}
        <div className="main2">
          {inHover && (
            <center>
              <div className="card">
                {/* {inHover.avatar} */}
                <img src={inHover.avatar} alt="Avatar" className="imgset" />
                <div class="container">
                  <h4>
                      {inHover.first_name} {inHover.last_name}
                  </h4>
                  <p className="cardname">{inHover.email}</p>
                </div>
                <button className="cardbtn">
                  <b>Active User</b>
                </button>
                <br />
                <h3 className="plan">Your Plan : Basic</h3>
                <p className="progbar">plan Uses</p>
                <progress value="3000" max="5000"></progress>
                <br />
                <h3 className="clicks">
                  <div className="cnum">
                    <p> 3000</p>
                    <div className="ctext">Clicks reviewd</div>
                  </div>
                  <br />
                  <div className="vl" />
                  <div className="montclick">
                    <p>4000</p>
                    <div className="mont">Monthly Clicks</div>
                  </div>
                </h3>
              </div>
            </center>
          )}
          {/* end card  */}
        </div>
        <tbody>
          {users?.map((user, id) => (
            <tr
              key={id}
              onMouseEnter={() => {
                setHover(user); // fetching data for user
              }}
              onMouseLeave={() => setHover(false)}
            >
              <td className="setitem">
                <img className="set" src={user.avatar} alt="avatar" />
                {user.first_name}
              </td>
              <td className="setitem">{user.last_name}</td>
              <td>{user.email}</td>
            </tr>
          ))}
        </tbody>
      </table>
      {/* start pagination button  */}
      <center>
        <button
          className="btn"
          onClick={() => {
            dispatch(FirstPage());
          }}
        >
          1
        </button>
        <button
          className="btn"
          onClick={() => {
            dispatch(SecondPage());
          }}
        >
          2
        </button>
      </center>
    </div>
  );
}

export default App;
