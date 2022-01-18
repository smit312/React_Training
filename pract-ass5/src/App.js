import "./App.css";
import UserList from "./component/UserList";
import UserData from "./component/UserData";
import { useState } from "react";
function App() {
  const [inHover, setHover] = useState(false);
  return (
    <div className="main">
      <table>
        <tr>
          <th className="settitle1">Name</th>
          <th className="settitle2">Status</th>
          <th className="settitle3"> Access</th>
        </tr>
      </table>
      {/* start to disply data into card */}
      <div className="main2">
        {inHover && (
          <p className="hover">
            <div class="card">
              <center>
                {
                  <img
                    src={inHover.imgavtar.props.src}
                    alt="Avatar"
                    className="imgset"
                  />
                }
                <div class="container">
                  <h4>{inHover.name} </h4>
                  <p className="cardname">{inHover.email}</p>
                </div>
                <button className="cardbtn">
                  <b>Active User</b>
                </button>
                <br />
                <h3 className="plan">Your Plan : {inHover.plan}</h3>
                <p className="progbar">plan Uses</p>
                <progress value={inHover.reviewd} max="5000"></progress>
                <br />
                <h3 className="clicks">
                  <div className="cnum">
                    {inHover.reviewd}
                    <div className="ctext">Clicks reviewd</div>
                  </div>
                  <br /> <div className="vl"></div>
                  <div className="montclick">
                    5000
                     <div className="mont" >Monthly Clicks</div>
                  </div>
                </h3>
              </center>
            </div>
          </p>
        )}
        {/* end to disply data into card */}
        {UserData.map((user, index) => {
          return (
            <UserList
              key={index}
              setHover={setHover}
              imgavtar={user.imgavtar}
              name={user.name}
              email={user.email}
              status={user.status}
              Access={user.Access}
              action={user.action}
              user={user}
            />
          );
        })}
      </div>
    </div>
  );
}

export default App;
