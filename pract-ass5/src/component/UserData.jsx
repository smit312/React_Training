import React from "react";
import * as Icon from "react-feather";
import Avatar from "@mui/material/Avatar";
import avtar1 from "../images/avtar1.jpg";
import avtar2 from "../images/avtar2.jpg";
import avtar3 from "../images/avtar3.jpg";
import avtar4 from "../images/avtar4.jpg";
import avtar5 from "../images/avtar5.jpg";
import avtar6 from "../images/avtar6.jpg";
import down from "../images/down.svg";

const UserData = [
  {
    imgavtar: <Avatar alt="Remy Sharp" src={avtar1} />,
    name: "peter",
    email: "abcd@gmail.com",
    status: (
      <div class="dropdown">
        <p class="dropbtn">
          active <img src={down} />
        </p>
        <div class="dropdown-content">
          <a href="#"> inactive</a>
        </div>
      </div>
    ),
    Access: (
      <div class="dropdown">
        <p class="dropbtn">
          owner <img src={down} />
        </p>
        <div class="dropdown-content">
          <a href="#"> Manager</a>
          <a href="#"> Read</a>
          <a href="#"> inactive</a>{" "}
        </div>
      </div>
    ),
    action: <Icon.Lock />,
  },
  {
    imgavtar: <Avatar alt="Remy Sharp" src={avtar2} />,
    name: "peter",
    email: "abcd@gmail.com",
    status: (
      <div class="dropdown">
        <p class="dropbtn">
          active <img src={down} />
        </p>
        <div class="dropdown-content">
          <a href="#"> inactive</a>
        </div>
      </div>
    ),
    Access: (
      <div class="dropdown">
        <p class="dropbtn">
          owner <img src={down} className="down" />
        </p>
        <div class="dropdown-content">
          <a href="#"> Manager</a>
          <a href="#"> Read</a>
          <a href="#"> inactive</a>{" "}
        </div>
      </div>
    ),
    action: <Icon.Trash2 />,
  },
  {
    imgavtar: <Avatar alt="Remy Sharp" src={avtar3} />,
    name: "peter",
    email: "abcd@gmail.com",
    status: (
      <div class="dropdown">
        <p class="dropbtn">
          active <img src={down} className="down" />
        </p>
        <div class="dropdown-content">
          <a href="#"> inactive</a>
        </div>
      </div>
    ),
    Access: (
      <div class="dropdown">
        <p class="dropbtn">
          owner <img src={down} />
        </p>
        <div class="dropdown-content">
          <a href="#"> Manager</a>
          <a href="#"> Read</a>
          <a href="#"> inactive</a>{" "}
        </div>
      </div>
    ),
    action: <Icon.Trash2 />,
  },
  {
    imgavtar: <Avatar alt="Remy Sharp" src={avtar4} />,
    name: "peter",
    email: "abcd@gmail.com",
    status: (
      <div class="dropdown">
        <p class="dropbtn">
          active <img src={down} className="down" />
        </p>
        <div class="dropdown-content">
          <a href="#"> inactive</a>
        </div>
      </div>
    ),
    Access: (
      <div class="dropdown">
        <p class="dropbtn">
          owner <img src={down} />
        </p>
        <div class="dropdown-content">
          <a href="#"> Manager</a>
          <a href="#"> Read</a>
          <a href="#"> inactive</a>{" "}
        </div>
      </div>
    ),
    action: <Icon.Trash2 />,
  },
  {
    imgavtar: <Avatar alt="Remy Sharp" src={avtar5} />,
    name: "peter",
    email: "abcd@gmail.com",
    status: (
      <div class="dropdown">
        <p class="dropbtn">
          active <img src={down} className="down" />
        </p>
        <div class="dropdown-content">
          <a href="#"> inactive</a>
        </div>
      </div>
    ),
    Access: (
      <div class="dropdown">
        <p class="dropbtn">
          owner <img src={down} />
        </p>
        <div class="dropdown-content">
          <a href="#"> Manager</a>
          <a href="#"> Read</a>
          <a href="#"> inactive</a>{" "}
        </div>
      </div>
    ),
    action: <Icon.Trash2 />,
  },
  {
    imgavtar: <Avatar alt="Remy Sharp" src={avtar6} />,
    name: "peter",
    email: "abcd@gmail.com",
    status: (
      <div class="dropdown">
        <p class="dropbtn">
          active <img src={down} className="down" />
        </p>
        <div class="dropdown-content">
          <a href="#"> inactive</a>
        </div>
      </div>
    ),
    Access: (
      <div class="dropdown">
        <p class="dropbtn">
          owner <img src={down} />
        </p>
        <div class="dropdown-content">
          <a href="#"> Manager</a>
          <a href="#"> Read</a>
          <a href="#"> inactive</a>{" "}
        </div>
      </div>
    ),
    action: <Icon.Trash2 />,
  },
];
export default UserData;
