import React from "react";

import "../App.css";

export const UserList = (props) => {
  return (
    <>
     
    <div
      onMouseEnter={() => {
        props.setHover(props.user); // fetching data for user
      }}
      onMouseLeave={() => props.setHover(false)}
    >
      <div className="container">
        <table>
          <tr>
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
    </>
  );
};
export default UserList;
