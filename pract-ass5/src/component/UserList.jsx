import React, { useState } from "react";
import "../App.css";

export const UserList = (props) => {
  const [inHover, setHover] = useState(false);
  return (
    <div>
      <div className="container">
        <table>
          <tr
            onMouseEnter={() => setHover(true)}
            onMouseLeave={() => setHover(false)}
          >
            {inHover && <p className="hover">Hi!</p>}
            <td className="set">
              {props.imgavtar}
              <p className="setitem">
                {props.name}
                <br />
                {props.email}
              </p>
            </td>
            <td className="setstatus">{props.status}</td>
            <td className="setstatus">{props.Access}</td>
            <td className="setstatus">{props.action}</td>
          </tr>
        </table>
      </div>
    </div>
  );
};
export default UserList;
