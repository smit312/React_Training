import "./App.css";

import UserList from "./component/UserList";
import UserData from "./component/UserData";
import avtar4 from "./images/avtar4.jpg";
// console.log(UserData[0].name);
function App() {
  return (
    <>
    <div class="card">
  <img src={avtar4} alt="Avatar" className="imgset"/>
  <div class="container">
    <h4><b>John Doe</b></h4> 
    <p>Architect & Engineer</p> 
  </div>
</div>
      <table >
        <tr>
          <th className="settitle1">Name</th>
          <th className="settitle2">Status</th>
          <th className="settitle3"> Access</th>
        </tr>
      </table>
      <UserList
        imgavtar={UserData[0].imgavtar}
        name={UserData[0].name}
        email={UserData[0].email}
        status={UserData[0].status}
        Access={UserData[0].Access}
        action={UserData[0].action}
      />
      <UserList
        imgavtar={UserData[1].imgavtar}
        name={UserData[1].name}
        email={UserData[1].email}
        status={UserData[1].status}
        Access={UserData[1].Access}
        action={UserData[1].action}
      />
      <UserList
        imgavtar={UserData[2].imgavtar}
        name={UserData[2].name}
        email={UserData[2].email}
        status={UserData[2].status}
        Access={UserData[2].Access}
        action={UserData[2].action}
      />
      <UserList
        imgavtar={UserData[3].imgavtar}
        name={UserData[3].name}
        email={UserData[3].email}
        status={UserData[3].status}
        Access={UserData[3].Access}
        action={UserData[3].action}
      />
      <UserList
        imgavtar={UserData[4].imgavtar}
        name={UserData[4].name}
        email={UserData[4].email}
        status={UserData[4].status}
        Access={UserData[4].Access}
        action={UserData[4].action}
      />
      <UserList
        imgavtar={UserData[5].imgavtar}
        name={UserData[5].name}
        email={UserData[5].email}
        status={UserData[5].status}
        Access={UserData[5].Access}
        action={UserData[5].action}
      />
      
    </>
  );
}

export default App;
